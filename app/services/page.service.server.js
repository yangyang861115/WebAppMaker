/**
 * Created by yangyang on 4/3/16.
 */
module.exports = function (app, applicationModel) {
    app.post("/api/application/:applicationId/new", createPage);

    var pageModel = require("../models/page/page.model.server.js")(applicationModel);

    function createPage(req, res) {
        var page = req.body;
        var applicationId = req.params.applicationId;
        pageModel
            .createPage(applicationId, page)
            .then(
                function (application) {
                    res.json(application);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }
}