/**
 * Created by yangyang on 4/3/16.
 */
(function(){
    angular
        .module("WebAppMakerApp")
        .factory("ApplicationService", applicationService);

    function applicationService($http){
        var api = {
            createApplication: createApplication,
            findApplicationsForUsername: findApplicationsForUsername,
            findApplicationById: findApplicationById
        };
        return api;

        function createApplication(application){
            return $http.post("/api/developer/"+application.developerUsername+"/application", application);
        }

        function findApplicationsForUsername(username) {
            return $http.get("/api/developer/" + username+ "/application");
        }

        function findApplicationById(applicationId) {
            return $http.get("/api/application/"+ applicationId);
        }
    }
})();