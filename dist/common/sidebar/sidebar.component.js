(function () {
    angular
        .module('sidebar')
        .component('sidebar', {
            templateUrl: 'common/sidebar/sidebar.html',
            css: 'common/sidebar/sidebar.css',
            controller: SideBarController
        });

    function SideBarController() {

    }
})();
