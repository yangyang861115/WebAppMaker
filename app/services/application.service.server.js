/**
 * Created by yangyang on 4/3/16.
 */
module.exports = function(app, applicationModel){
    app.post("/api/developer/:username/application", createApplication);
    app.get("/api/developer/:username/application", findApplicationsForUsername);
    app.get("/api/application/:applicationId", findApplicationById);

    function createApplication(req, res){
        var username = req.params.username;
        var application = req.body;
        applicationModel
            .createApplication(application)
            .then(
                function(application) {
                    res.json(application);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function findApplicationsForUsername(req, res){
        var username = req.params.username;
        applicationModel
            .findApplicationsForUsername(username)
            .then(
                function(applications) {
                    res.json(applications);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }

    function findApplicationById(req, res) {
        var applicationId = req.params.applicationId;
        applicationModel
            .findApplicationById(applicationId)
            .then(
                function(application) {
                    res.json(application);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }
}