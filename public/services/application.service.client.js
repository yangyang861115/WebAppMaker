/**
 * Created by yangyang on 4/3/16.
 */
(function(){
    angular
        .module("WebAppMakerApp")
        .factory("ApplicationService", applicationService);

    function applicationService($http){
        var api = {
            createApplication: createApplication
        };
        return api;

        function createApplication(application){
            return $http.post("/api/developer/"+application.developerUsername+"/application", application);
        }
    }
})();