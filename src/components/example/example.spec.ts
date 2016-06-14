import ExampleController from './example.controller';

describe('app', () => {

  describe('ExampleController', () => {
    let ctrl;

    beforeEach(() => {
      ctrl = new ExampleController();
    });

    it('should contain the starter url', () => {
      expect(ctrl.text).toBe('thing!');
    });
  });
});
