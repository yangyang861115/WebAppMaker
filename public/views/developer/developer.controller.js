/**
 * Created by yangyang on 4/3/16.
 */
(function () {
    angular
        .module("WebAppMakerApp")
        .controller("DeveloperListController", developerListController)
        .controller("NewDeveloperController", newDeveloperController);

    function developerListController(DeveloperService) {
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
})();