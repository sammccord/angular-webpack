interface DropDownItem {
    href: string,
    label: string
}

export default class DropDownController {

    items: DropDownItem[];

    static $inject = ['$scope', '$attrs'];

    constructor($scope: ng.IScope, $attrs) {
        this.items = $scope.$eval($attrs.items) || [];
    }
}
