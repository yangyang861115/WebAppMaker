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
            findPagesForApplication: findPagesForApplication,
            findPage: findPage,
            removePage: removePage,
            updatePage: updatePage
        };
        return api;

        function createPage(applicationId, page) {
            return $http.post("/api/application/" + applicationId + "/page", page);
        }

        function findPagesForApplication(applicationId){
            return $http.get("/api/application/"+ applicationId + "/page");
        }

        function findPage(applicationId, pageId){
            return $http.get("/api/application/"+ applicationId + "/page/" + pageId);
        }

        function removePage(applicationId, pageId){
            return $http.delete("/api/application/"+ applicationId + "/page/" + pageId);
        }

        function updatePage(applicationId, page){
            return $http.put("/api/application/"+ applicationId + "/page/" + page._id, page);
        }
    }
})();