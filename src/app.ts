import './index.scss';
import './core/modules.ts';
import './core/services.ts';
import './core/components.ts';

angular.element(document).ready( () => {
   angular.bootstrap(document, ['app'], {
       strictDi: true
   });
});
