/**
 * Created by yangyang on 4/3/16.
 */
(function(){
    angular
        .module("WebAppMakerApp")
        .factory("DeveloperService", developerService);

    function developerService($http){
        var api = {
            createDeveloper: createDeveloper,
            findAllDevelopers: findAllDevelopers
        };
        return api;

        function createDeveloper(developer){
            console.log(developer);
            return $http.post("/api/developer", developer);
        }

        function findAllDevelopers() {
            return $http.get("/api/developer");
        }
    }
})();