import { BytesConverter } from './BytesConverter.ts';

describe('BytesConverter', () => {

  describe('BytesConverter', () => {
    it('should initialize with an empty items array', () => {
      const bytesConverter = new BytesConverter();
      expect(bytesConverter.items.length).toBe(0);
    });
  });
});
