/**
 * Created by yangyang on 4/3/16.
 */
var mongoose = require("mongoose");

module.exports = function(db){
    var DeveloperSchema = require("./developer.schema.server.js")();
    var Developer = mongoose.model("Developer", DeveloperSchema);

}