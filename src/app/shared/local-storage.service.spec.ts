import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { LocalStorageService } from './local-storage.service';

describe('LocalStorageService', () => {
  let service: LocalStorageService;
  let storage: Storage;
  let originalWindowDescriptor: PropertyDescriptor | undefined;
  let originalLocalStorageDescriptor: PropertyDescriptor | undefined;
  let createdWindow = false;

  const createStorageMock = (): Storage => {
    const store = new Map<string, string>();

    return {
      get length() {
        return store.size;
      },
      clear: () => {
        store.clear();
      },
      getItem: (key: string) => store.get(key) ?? null,
      key: (index: number) => Array.from(store.keys())[index] ?? null,
      removeItem: (key: string) => {
        store.delete(key);
      },
      setItem: (key: string, value: string) => {
        store.set(key, value);
      },
    };
  };

  beforeEach(() => {
    originalWindowDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'window');
    originalLocalStorageDescriptor = Object.getOwnPropertyDescriptor(globalThis, 'localStorage');

    storage = createStorageMock();

    if (typeof window === 'undefined') {
      createdWindow = true;
      Object.defineProperty(globalThis, 'window', {
        value: {},
        configurable: true,
        writable: true,
      });
    }

    Object.defineProperty(globalThis, 'localStorage', {
      value: storage,
      configurable: true,
      writable: true,
    });

    service = new LocalStorageService();
    storage.clear();
  });

  afterEach(() => {
    vi.restoreAllMocks();

    if (originalLocalStorageDescriptor) {
      Object.defineProperty(globalThis, 'localStorage', originalLocalStorageDescriptor);
    } else {
      delete (globalThis as { localStorage?: Storage }).localStorage;
    }

    if (createdWindow) {
      if (originalWindowDescriptor) {
        Object.defineProperty(globalThis, 'window', originalWindowDescriptor);
      } else {
        delete (globalThis as { window?: Window & typeof globalThis }).window;
      }
      createdWindow = false;
    }
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should set and get strings', () => {
    service.setString('language', 'en');

    expect(service.getString('language')).toBe('en');
  });

  it('should return null for missing string keys', () => {
    expect(service.getString('missing-key')).toBeNull();
  });

  it('should set and get numbers', () => {
    service.setNumber('players', 4);

    expect(service.getNumber('players')).toBe(4);
    expect(storage.getItem('players')).toBe('4');
  });

  it('should return null for invalid number values', () => {
    storage.setItem('players', 'not-a-number');

    expect(service.getNumber('players')).toBeNull();
  });

  it('should return null for missing number keys', () => {
    expect(service.getNumber('missing-key')).toBeNull();
  });

  it('should not read or write when storage is unavailable', () => {
    vi.spyOn(service as unknown as { isStorageAvailable: () => boolean }, 'isStorageAvailable').mockReturnValue(false);

    service.setString('key', 'value');

    expect(service.getString('key')).toBeNull();
    expect(service.getNumber('key')).toBeNull();
    expect(storage.getItem('key')).toBeNull();
  });
});
