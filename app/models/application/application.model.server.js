/**
 * Created by yangyang on 4/3/16.
 */
var mongoose = require("mongoose");
var q = require("q");

module.exports = function () {
    var ApplicationSchema = require("./application.schema.server.js")();
    var Application = mongoose.model("Application", ApplicationSchema);

    var api = {
        createApplication: createApplication
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

}