/**
 * Created by yangyang on 4/3/16.
 */
var mongoose = require("mongoose");

module.exports = function(){
    var ApplicationSchema = mongoose.Schema({
        developerUsername: String,
        name: {type: String, default: "Application Name"},
        description: String,
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "application"});

    return ApplicationSchema;
}