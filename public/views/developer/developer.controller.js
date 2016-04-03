/**
 * Created by yangyang on 4/3/16.
 */
(function () {
    angular
        .module("WebAppMakerApp")
        .controller("DeveloperListController", developerListController)
        .controller("NewDeveloperController", newDeveloperController)
        .controller("EditDeveloperController", editDeveloperController);

    function developerListController(DeveloperService) {
        console.log("DeveloperListController on duty");
        var vm = this;
        function init(){
            DeveloperService
                .findAllDevelopers()
                .then(
                    function(response){
                        vm.developers = response.data;
                    },
                    function(err){
                        vm.error = err;
                    }
                );
        }
        init();



    }

    function newDeveloperController(DeveloperService, $location) {
        console.log("NewDeveloperController on duty");
        var vm = this;
        vm.createDeveloper = createDeveloper;

        function createDeveloper(developer) {
            console.log(developer);
            DeveloperService
                .createDeveloper(developer)
                .then(
                    function(developer){
                        vm.developer = developer;
                        $location.url("/developer");
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }

    }

    function editDeveloperController($routeParams, DeveloperService, $location){
        console.log("EditDeveloperController on duty");
        var username = $routeParams.username;

        var vm = this;
        vm.updateDeveloper = updateDeveloper;

        function init(){
            DeveloperService
                .findDeveloperByUsername(username)
                .then(
                    function(response) {
                        vm.developer = response.data;
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }
        init();

        function updateDeveloper(developer) {
            console.log(developer);
            DeveloperService
                .updateDeveloper(developer)
                .then(
                    function(response) {
                        $location.url("/developer");
                    },
                    function(err) {
                        vm.error = err;
                    }
                );
        }

    }
})();