/**
 * Created by yangyang on 4/3/16.
 */
var mongoose = require("mongoose");

module.exports = function () {
    var PageSchema = mongoose.Schema({
        name: String,
        title: String,
        dateCreated: {type: Date, default: Date.now}
    });
    return PageSchema;
};