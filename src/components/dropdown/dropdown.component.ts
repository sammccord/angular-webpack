import './dropdown.scss';

import { BaseComponent } from "../../common/component.ts";
import DropDownController from './dropdown.controller.ts';

class DropDown extends BaseComponent {

  public scope = {}

  public controller = DropDownController;
  public controllerAs = 'ctrl';

  public template = require('./dropdown.html');
}

angular.module('app')
  .directive('dropdown', () => new DropDown());
