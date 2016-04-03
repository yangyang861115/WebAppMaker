/**
 * Created by yangyang on 4/3/16.
 */
(function () {
    angular
        .module("WebAppMakerApp")
        .factory("DeveloperService", developerService);

    function developerService($http) {
        var api = {
            createDeveloper: createDeveloper,
            findAllDevelopers: findAllDevelopers,
            findDeveloperByUsername: findDeveloperByUsername,
            updateDeveloper : updateDeveloper
        };
        return api;

        function createDeveloper(developer) {
            return $http.post("/api/developer", developer);
        }

        function findAllDevelopers() {
            return $http.get("/api/developer");
        }

        function findDeveloperByUsername(username) {
            return $http.get("/api/developer/" + username);
        }

        function updateDeveloper(developer) {
            return $http.put("/api/developer/"+ developer.username, developer);
        }
    }
})();