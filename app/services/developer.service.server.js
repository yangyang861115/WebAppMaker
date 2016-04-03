/**
 * Created by yangyang on 4/3/16.
 */
module.exports = function(app, developerModel){
    app.post("/api/developer", createDeveloper);

    function createDeveloper(req, res) {
        var developer = req.body;
        developerModel.createDeveloper(developer);
    }
}