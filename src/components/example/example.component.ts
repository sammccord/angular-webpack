import './example.scss';

import { BaseComponent } from "../../common/component.ts";
import ExampleController from './example.controller.ts';

class Example extends BaseComponent {

  public scope = {}

  public controller = ExampleController;
  public controllerAs = 'ctrl';

  public template = require('./example.html');
}

angular.module('app')
  .directive('example', () => new Example());
