(function () {
    angular
        .module("WebAppMakerApp")
        .controller("PageListController", pageListController)
        .controller("NewPageController", newPageController);

    function pageListController($routeParams, PageService) {
        var vm = this;
        vm.username = $routeParams.username;
        vm.applicationId = $routeParams.applicationId;

        function init() {
            PageService
                .findPagesForApplication(vm.applicationId)
                .then(
                    function(response){
                        vm.pages = response.data;
                    },
                    function(err){
                        vm.error = err;
                    }
                );
        }
        init();
    }

    function newPageController($routeParams, PageService, $location) {
        var vm = this;
        vm.username = $routeParams.username;
        vm.applicationId = $routeParams.applicationId;
        vm.createPage = createPage;

        function createPage(page) {
            PageService
                .createPage(vm.applicationId, page)
                .then(
                    function(response) {
                        $location.url("/developer/" + vm.username + "/application/" + vm.applicationId + "/page");
                    }
                );
        }
    }
})();