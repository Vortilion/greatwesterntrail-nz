import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  getNumber(key: string): number | null {
    const value = this.getString(key);

    if (value === null) {
      return null;
    }

    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  setNumber(key: string, value: number): void {
    this.setString(key, String(value));
  }

  getString(key: string): string | null {
    if (!this.isStorageAvailable()) {
      return null;
    }

    return localStorage.getItem(key);
  }

  setString(key: string, value: string): void {
    if (!this.isStorageAvailable()) {
      return;
    }

    localStorage.setItem(key, value);
  }

  private isStorageAvailable(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
