/**
 * Created by yangyang on 4/3/16.
 */
var mongoose = require("mongoose");
var q = require("q");

module.exports = function () {
    var ApplicationSchema = require("./application.schema.server.js")();
    var Application = mongoose.model("Application", ApplicationSchema);

    var api = {
        createApplication: createApplication,
        findApplicationsForUsername: findApplicationsForUsername,
        findApplicationById: findApplicationById,
        removeApplication: removeApplication,
        getMongooseModel: getMongooseModel
    };
    return api;

    function createApplication(application) {
        var deferred = q.defer();
        Application.create(application,
            function (err, application) {
                if (!err) {
                    deferred.resolve(application);
                } else {
                    deferred.reject(err);
                }
            });
        return deferred.promise;
    }

    function findApplicationsForUsername(username) {
        var deferred = q.defer();
        Application.find(
            {developerUsername: username},
            function (err, applications) {
                if (!err) {
                    deferred.resolve(applications);
                } else {
                    deferred.reject(err);
                }
            });
        return deferred.promise;
    }

    function findApplicationById(applicationId) {
        // mongoose 4.x promises
        return Application.findById(applicationId);
    }

    function removeApplication(applicationId) {
        return Application.remove().where("_id").equals(applicationId);
    }

    function getMongooseModel(){
        return Application;
    }
}