/**
 * Created by yangyang on 4/3/16.
 */
module.exports = function(app, developerModel){
    app.post("/api/developer", createDeveloper);
    app.get("/api/developer", findAllDevelopers);
    app.get("/api/developer/:username", findDeveloperByUsername);
    app.put("/api/developer/:username", updateDeveloper);

    function createDeveloper(req, res) {
        var developer = req.body;
        developerModel
            .createDeveloper(developer)
            .then(
                function(developer) {
                    res.json(developer);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function findAllDevelopers(req, res){
        developerModel
            .findAllDevelopers()
            .then(
                function(developers) {
                    res.json(developers);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function findDeveloperByUsername(req, res) {
        var username = req.params.username;
        developerModel
            .findDeveloperByUsername(username)
            .then(
                function(developer) {
                    res.json(developer);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }

    function updateDeveloper(req, res) {
        var developer = req.body;
        var username = req.params.username;
        developerModel
            .updateDeveloper(username, developer)
            .then(
                function(stats) {
                    res.send(200);
                },
                function(err) {
                    res.status(400).send(err);
                }
            );
    }
}