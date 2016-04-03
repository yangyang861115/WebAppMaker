/**
 * Created by yangyang on 4/3/16.
 */
var mongoose = require("mongoose");
var q = require("q");

module.exports = function(db){
    var DeveloperSchema = require("./developer.schema.server.js")();
    var Developer = mongoose.model("Developer", DeveloperSchema);

    var api = {
        createDeveloper: createDeveloper,
        findAllDevelopers: findAllDevelopers
    };
    return api;

    function createDeveloper(developer){
        var deferred = q.defer();
        Developer.create(developer, function(err, doc){
            console.log(doc);
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(doc);
            }
        });
        return deferred.promise;
    }

    function findAllDevelopers(){
        var deferred = q.defer();
        Developer.find(function(err, doc){
            if(!err) {
                deferred.resolve(doc);
            } else {
                deferred.reject(err);
            }
        });
        return deferred.promise;
    }
};