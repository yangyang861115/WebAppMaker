/**
 * Created by yangyang on 4/3/16.
 */
(function () {
    angular
        .module("WebAppMakerApp")
        .controller("ApplicationListController", applicationListController)
        .controller("NewApplicationController", newApplicationController);

    function applicationListController($routeParams, ApplicationService) {
        var vm = this;
        vm.username = $routeParams.username;

        function init(){
            ApplicationService
                .findApplicationsForUsername(vm.username)
                .then(
                    function(response) {
                        vm.applications = response.data;
                    },
                    function(err) {
                        vm.error =  err;
                    }
                );
        }
        init();
    }

    function newApplicationController($routeParams, ApplicationService, $location) {
        var vm = this;
        vm.username = $routeParams.username;
        vm.createApplication = createApplication;

        function createApplication(application) {
            application.developerUsername = vm.username;
            ApplicationService
                .createApplication(application)
                .then(
                    function(response) {
                        console.log(response.data);
                        $location.url("/developer/" + vm.username + "/application");
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }
    }
})();