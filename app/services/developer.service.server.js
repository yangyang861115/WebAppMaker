/**
 * Created by yangyang on 4/3/16.
 */
module.exports = function(app, developerModel){
    app.post("/api/developer", createDeveloper);
    app.get("/api/developer", findAllDevelopers);

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
}