angular.module('app').component('detailPanel', {
        transclude: true,
        templateUrl: '/components/detailPanel.html',
        bindings: {
            title: '@',
            initialCollapsed: '@collapsed'
        },
        bindToController: true,
        controller: function() {
            this.collapsed = (this.initialCollapsed === 'true');

            this.collapse = function() {
                this.collapsed = !this.collapsed;
            }
        }
    }
);

