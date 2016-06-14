import { BytesConverter } from './BytesConverter';

describe('BytesConverter', () => {

  describe('BytesConverter', () => {
    it('should initialize with an empty items array', () => {
      const bytesConverter = new BytesConverter();
      expect(bytesConverter.items.length).toBe(0);
    });
  });
});
