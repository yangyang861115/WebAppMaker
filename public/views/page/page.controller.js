(function () {
    angular
        .module("WebAppMakerApp")
        .controller("PageListController", pageListController)
        .controller("NewPageController", newPageController)
        .controller("EditPageController", editPageController);

    function pageListController($routeParams, PageService) {
        var vm = this;
        vm.username = $routeParams.username;
        vm.applicationId = $routeParams.applicationId;

        function init() {
            PageService
                .findPagesForApplication(vm.applicationId)
                .then(
                    function (response) {
                        vm.pages = response.data;
                    },
                    function (err) {
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
                    function (response) {
                        $location.url("/developer/" + vm.username + "/application/" + vm.applicationId + "/page");
                    }
                );
        }
    }

    function editPageController($routeParams, PageService, $location) {
        var vm = this;
        vm.removePage = removePage;
        vm.updatePage = updatePage;

        vm.username = $routeParams.username;
        vm.applicationId = $routeParams.applicationId;
        vm.pageId = $routeParams.pageId;

        function init() {
            PageService
                .findPage(vm.applicationId, vm.pageId)
                .then(
                    function (response) {
                        vm.page = response.data;
                    },
                    function (err) {
                        vm.error = err;
                    }
                );
        }

        init();

        function removePage(page) {
            PageService
                .removePage(vm.applicationId, vm.pageId)
                .then(
                    function (response) {
                        $location.url("/developer/" + vm.username + "/application/" + vm.applicationId + "/page");
                    },
                    function (err) {
                        vm.error = err;
                    }
                );
        }

        function updatePage(page) {
            PageService
                .updatePage(vm.applicationId, page)
                .then(
                    function(response) {
                        $location.url("/developer/" + vm.username + "/application/" + vm.applicationId + "/page");
                    },
                    function (err) {
                        vm.error = err;
                    }
                );
        }
    }
})();