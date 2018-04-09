(function () {
    angular
        .module('sidebar')
        .component('sidebar', {
            templateUrl: 'app/common/sidebar/sidebar.html',
            css: 'app/common/sidebar/sidebar.css',
            controller: SideBarController
        });

    function SideBarController() {

    }
})();
