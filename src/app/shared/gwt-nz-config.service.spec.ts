import { beforeEach, describe, expect, it, vi } from 'vitest';

import { GwtNzConfigService } from './gwt-nz-config.service';

describe('GwtNzConfigService', () => {
  let service: GwtNzConfigService;

  beforeEach(() => {
    service = new GwtNzConfigService();
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  // ---------------------------------------------------------------------------
  // playerCount signal
  // ---------------------------------------------------------------------------

  describe('playerCount', () => {
    it('should have a default value of 2', () => {
      expect(service.playerCount()).toBe(2);
    });

    it('should update when setPlayerCount is called', () => {
      service.setPlayerCount(4);

      expect(service.playerCount()).toBe(4);
    });

    it('should reflect the most recently set value', () => {
      service.setPlayerCount(3);
      service.setPlayerCount(5);

      expect(service.playerCount()).toBe(5);
    });

    it('should be a readonly signal that cannot be set directly', () => {
      expect(typeof service.playerCount).toBe('function');
      expect((service.playerCount as { set?: unknown }).set).toBeUndefined();
    });
  });

  // ---------------------------------------------------------------------------
  // neutralBuildings data
  // ---------------------------------------------------------------------------

  describe('neutralBuildings', () => {
    it('should contain exactly 8 tiles', () => {
      expect(service.neutralBuildings).toHaveLength(8);
    });

    it('should have tiles labelled A through H', () => {
      const titles = service.neutralBuildings.map((t) => t.title);

      expect(titles).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
    });

    it('should have exactly one side per tile', () => {
      service.neutralBuildings.forEach((tile) => {
        expect(tile.sides).toHaveLength(1);
      });
    });

    it('should label all sides "front"', () => {
      service.neutralBuildings.forEach((tile) => {
        expect(tile.sides[0]?.title).toBe('front');
      });
    });
  });

  // ---------------------------------------------------------------------------
  // playerBuildings data
  // ---------------------------------------------------------------------------

  describe('playerBuildings', () => {
    it('should contain exactly 10 tiles', () => {
      expect(service.playerBuildings).toHaveLength(10);
    });

    it('should have tiles labelled 1 through 10', () => {
      const titles = service.playerBuildings.map((t) => t.title);

      expect(titles).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
    });

    it('should have exactly two sides per tile', () => {
      service.playerBuildings.forEach((tile) => {
        expect(tile.sides).toHaveLength(2);
      });
    });

    it('should label the two sides "a" and "b" for each tile', () => {
      service.playerBuildings.forEach((tile) => {
        const sideTitles = tile.sides.map((s) => s.title);

        expect(sideTitles).toEqual(['a', 'b']);
      });
    });
  });

  // ---------------------------------------------------------------------------
  // deckBuildingModules data
  // ---------------------------------------------------------------------------

  describe('deckBuildingModules', () => {
    it('should contain exactly 10 entries', () => {
      expect(service.deckBuildingModules).toHaveLength(10);
    });

    it('should contain string entries "1" through "10"', () => {
      expect(service.deckBuildingModules).toEqual([
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
      ]);
    });
  });

  // ---------------------------------------------------------------------------
  // harborMasters data
  // ---------------------------------------------------------------------------

  describe('harborMasters', () => {
    it('should contain exactly 8 tiles', () => {
      expect(service.harborMasters).toHaveLength(8);
    });

    it('should have tiles labelled 1 through 8', () => {
      const titles = service.harborMasters.map((t) => t.title);

      expect(titles).toEqual(['1', '2', '3', '4', '5', '6', '7', '8']);
    });

    it('should have exactly one side per tile', () => {
      service.harborMasters.forEach((tile) => {
        expect(tile.sides).toHaveLength(1);
      });
    });

    it('should label all sides "front"', () => {
      service.harborMasters.forEach((tile) => {
        expect(tile.sides[0]?.title).toBe('front');
      });
    });

    it('should provide an image path on every side', () => {
      service.harborMasters.forEach((tile) => {
        expect(tile.sides[0]?.image).toBeTruthy();
      });
    });

    it('should have unique image paths for every tile', () => {
      const images = service.harborMasters.map((t) => t.sides[0]?.image);
      const uniqueImages = new Set(images);

      expect(uniqueImages.size).toBe(8);
    });

    it('should reference images in the img/ directory', () => {
      service.harborMasters.forEach((tile) => {
        expect(tile.sides[0]?.image).toMatch(/^img\//);
      });
    });
  });

  // ---------------------------------------------------------------------------
  // getRandomNeutralBuildingOrder
  // ---------------------------------------------------------------------------

  describe('getRandomNeutralBuildingOrder', () => {
    it('should return exactly 8 tiles', () => {
      expect(service.getRandomNeutralBuildingOrder()).toHaveLength(8);
    });

    it('should contain all original neutral building titles', () => {
      const result = service.getRandomNeutralBuildingOrder();
      const titles = result.map((t) => t.title).sort();

      expect(titles).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);
    });

    it('should not modify the original neutralBuildings array', () => {
      const originalTitles = service.neutralBuildings.map((t) => t.title);

      service.getRandomNeutralBuildingOrder();

      expect(service.neutralBuildings.map((t) => t.title)).toEqual(originalTitles);
    });

    it('should return a new array instance each time', () => {
      const first = service.getRandomNeutralBuildingOrder();
      const second = service.getRandomNeutralBuildingOrder();

      expect(first).not.toBe(second);
    });

    it('should produce different orderings over multiple calls', () => {
      // With 8 elements there are 40 320 permutations; after 20 shuffles the
      // probability that every result is identical is astronomically small.
      const results = Array.from({ length: 20 }, () =>
        service.getRandomNeutralBuildingOrder().map((t) => t.title).join(',')
      );
      const unique = new Set(results);

      expect(unique.size).toBeGreaterThan(1);
    });
  });

  // ---------------------------------------------------------------------------
  // getRandomHarborMasters
  // ---------------------------------------------------------------------------

  describe('getRandomHarborMasters', () => {
    it('should return exactly 5 harbor masters', () => {
      expect(service.getRandomHarborMasters()).toHaveLength(5);
    });

    it('should only return tiles that exist in harborMasters', () => {
      const validTitles = new Set(service.harborMasters.map((t) => t.title));
      const result = service.getRandomHarborMasters();

      result.forEach((tile) => {
        expect(validTitles.has(tile.title)).toBe(true);
      });
    });

    it('should not return duplicate harbor masters', () => {
      const result = service.getRandomHarborMasters();
      const titles = result.map((t) => t.title);
      const uniqueTitles = new Set(titles);

      expect(uniqueTitles.size).toBe(5);
    });

    it('should not modify the original harborMasters array', () => {
      const originalTitles = service.harborMasters.map((t) => t.title);

      service.getRandomHarborMasters();

      expect(service.harborMasters.map((t) => t.title)).toEqual(originalTitles);
    });

    it('should return a new array instance each time', () => {
      const first = service.getRandomHarborMasters();
      const second = service.getRandomHarborMasters();

      expect(first).not.toBe(second);
    });

    it('should return different selections over multiple calls', () => {
      // 8 choose 5 gives 56 combinations; after 30 calls at least 2 must differ.
      const results = Array.from({ length: 30 }, () =>
        service.getRandomHarborMasters().map((t) => t.title).sort().join(',')
      );
      const unique = new Set(results);

      expect(unique.size).toBeGreaterThan(1);
    });
  });

  // ---------------------------------------------------------------------------
  // getRandomDeckbuildingModules
  // ---------------------------------------------------------------------------

  describe('getRandomDeckbuildingModules', () => {
    it('should return exactly 4 modules', () => {
      expect(service.getRandomDeckbuildingModules()).toHaveLength(4);
    });

    it('should only return modules that exist in deckBuildingModules', () => {
      const validModules = new Set(service.deckBuildingModules);
      const result = service.getRandomDeckbuildingModules();

      result.forEach((module) => {
        expect(validModules.has(module)).toBe(true);
      });
    });

    it('should not return duplicate modules', () => {
      const result = service.getRandomDeckbuildingModules();
      const unique = new Set(result);

      expect(unique.size).toBe(4);
    });

    it('should return modules sorted numerically in ascending order', () => {
      // Run several times to account for randomness.
      for (let i = 0; i < 20; i++) {
        const result = service.getRandomDeckbuildingModules();
        const sorted = [...result].sort((a, b) => parseInt(a) - parseInt(b));

        expect(result).toEqual(sorted);
      }
    });

    it('should not modify the original deckBuildingModules array', () => {
      const original = [...service.deckBuildingModules];

      service.getRandomDeckbuildingModules();

      expect(service.deckBuildingModules).toEqual(original);
    });

    it('should return different selections over multiple calls', () => {
      // 10 choose 4 gives 210 combinations.
      const results = Array.from({ length: 30 }, () =>
        service.getRandomDeckbuildingModules().join(',')
      );
      const unique = new Set(results);

      expect(unique.size).toBeGreaterThan(1);
    });
  });

  // ---------------------------------------------------------------------------
  // getRandomPlayerBuildings
  // ---------------------------------------------------------------------------

  describe('getRandomPlayerBuildings', () => {
    it('should return exactly 10 player buildings', () => {
      expect(service.getRandomPlayerBuildings()).toHaveLength(10);
    });

    it('should preserve all original building titles', () => {
      const result = service.getRandomPlayerBuildings();
      const titles = result.map((t) => t.title);

      expect(titles).toEqual(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']);
    });

    it('should leave exactly one side on each building', () => {
      const result = service.getRandomPlayerBuildings();

      result.forEach((tile) => {
        expect(tile.sides).toHaveLength(1);
      });
    });

    it('should assign only valid side titles ("a" or "b") to each building', () => {
      const result = service.getRandomPlayerBuildings();

      result.forEach((tile) => {
        expect(['a', 'b']).toContain(tile.sides[0]?.title);
      });
    });

    it('should not modify the original playerBuildings array', () => {
      const originalSideCounts = service.playerBuildings.map((t) => t.sides.length);

      service.getRandomPlayerBuildings();

      service.playerBuildings.forEach((tile, index) => {
        expect(tile.sides).toHaveLength(originalSideCounts[index]!);
      });
    });

    it('should return a deep copy — mutating the result must not affect the original', () => {
      const result = service.getRandomPlayerBuildings();

      result[0]!.sides[0]!.title = 'mutated';

      expect(service.playerBuildings[0]!.sides[0]!.title).toBe('a');
      expect(service.playerBuildings[0]!.sides[1]!.title).toBe('b');
    });

    it('should randomly assign sides — both "a" and "b" should appear across many calls', () => {
      const sideSets = Array.from({ length: 50 }, () =>
        service
          .getRandomPlayerBuildings()
          .map((t) => t.sides[0]?.title)
      );

      const allSides = sideSets.flat();
      const hasA = allSides.some((s) => s === 'a');
      const hasB = allSides.some((s) => s === 'b');

      expect(hasA).toBe(true);
      expect(hasB).toBe(true);
    });

    it('should return different side configurations over multiple calls', () => {
      const results = Array.from({ length: 20 }, () =>
        service.getRandomPlayerBuildings().map((t) => t.sides[0]?.title).join(',')
      );
      const unique = new Set(results);

      expect(unique.size).toBeGreaterThan(1);
    });
  });

  // ---------------------------------------------------------------------------
  // shuffleArray (via public methods)
  // ---------------------------------------------------------------------------

  describe('shuffleArray (behaviour observed through public API)', () => {
    it('should not lose any elements when shuffling neutralBuildings', () => {
      const result = service.getRandomNeutralBuildingOrder();

      expect(result).toHaveLength(service.neutralBuildings.length);
    });

    it('should not lose any elements when shuffling harborMasters internally', () => {
      // getRandomHarborMasters pops 5 items off the shuffled copy; the original
      // must still have all 8 entries.
      service.getRandomHarborMasters();

      expect(service.harborMasters).toHaveLength(8);
    });

    it('should work correctly when Math.random is mocked to always return 0', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0);

      const result = service.getRandomNeutralBuildingOrder();

      expect(result).toHaveLength(8);
      const titles = result.map((t) => t.title).sort();
      expect(titles).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

      vi.restoreAllMocks();
    });

    it('should work correctly when Math.random is mocked to always return close to 1', () => {
      vi.spyOn(Math, 'random').mockReturnValue(0.9999);

      const result = service.getRandomNeutralBuildingOrder();

      expect(result).toHaveLength(8);
      const titles = result.map((t) => t.title).sort();
      expect(titles).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

      vi.restoreAllMocks();
    });
  });
});
