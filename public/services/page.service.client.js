/**
 * Created by yangyang on 4/3/16.
 */
(function () {
    angular
        .module("WebAppMakerApp")
        .factory("PageService", pageService);

    function pageService($http) {
        var api = {
            createPage: createPage,
            findPagesForApplication: findPagesForApplication
        };
        return api;

        function createPage(applicationId, page) {
            return $http.post("/api/application/" + applicationId + "/page", page);
        }

        function findPagesForApplication(applicationId){
            return $http.get("/api/application/"+ applicationId + "/page");
        }

    }
})();