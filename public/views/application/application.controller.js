/**
 * Created by yangyang on 4/3/16.
 */
(function () {
    angular
        .module("WebAppMakerApp")
        .controller("ApplicationListController", applicationListController)
        .controller("NewApplicationController", newApplicationController);

    function applicationListController($routeParams) {
        var vm = this;
        vm.username = $routeParams.username;
    }

    function newApplicationController($routeParams) {
        var vm = this;
        vm.username = $routeParams.username;
        vm.createApplication = createApplication;

        function createApplication(application) {

        }
    }
})();