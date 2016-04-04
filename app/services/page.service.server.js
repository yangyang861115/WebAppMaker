/**
 * Created by yangyang on 4/3/16.
 */
module.exports = function (app, applicationModel) {
    app.post("/api/application/:applicationId/page", createPage);
    app.get("/api/application/:applicationId/page", findPagesForApplication)

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

    function findPagesForApplication(req, res) {
        var applicationId = req.params.applicationId;
        pageModel
            .findPagesForApplication(applicationId)
            .then(
                function (application) {
                    res.json(application.pages);
                },
                function (err) {
                    res.status(400).send(err);
                }
            );
    }
}