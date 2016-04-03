/**
 * Created by yangyang on 4/3/16.
 */
module.exports = function(app, db){
    var developerModel = require('./models/developer/developer.model.server.js')(db);
    var developerService = require('./services/developer.service.server.js')(app, developerModel);

}