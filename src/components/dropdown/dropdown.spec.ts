import DropDownController from './dropdown.controller';

describe('Dropdown Component', () => {

  describe('DropDownController', () => {
    let ctrl, $rootScope;

    beforeEach(angular.mock.inject(function(_$rootScope_) {
      $rootScope = _$rootScope_;
    }));

    beforeEach(() => {
      ctrl = new DropDownController($rootScope.$new(), {});
    });

    it('should initialize with empty items property', () => {
      expect(ctrl.items.length).toBe(0);
    });
  });
});
