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
        findAllDevelopers: findAllDevelopers,
        findDeveloperByUsername: findDeveloperByUsername,
        updateDeveloper: updateDeveloper,
        deleteDeveloper: deleteDeveloper
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

    function findDeveloperByUsername(username){
        var deferred = q.defer();
        Developer.findOne({username: username}, function(err, doc){
            if(!err) {
                deferred.resolve(doc);
            } else {
                deferred.reject(err);
            }
        });
        return deferred.promise;
    }

    function updateDeveloper(username, developer) {
        var deferred = q.defer();
        Developer.update(
            {username: username},
            {$set: developer},
            function(err, stats){
            if(!err) {
                deferred.resolve(stats);
            } else {
                deferred.reject(err);
            }
        });
        return deferred.promise;
    }

    function deleteDeveloper(username) {
        var deferred = q.defer();
        Developer.remove(
            {username: username},
            function(err, stats){
                if(!err) {
                    deferred.resolve(stats);
                } else {
                    deferred.reject(err);
                }
            });
        return deferred.promise;
    }
};