/**
 * Created by yangyang on 4/3/16.
 */
module.exports = function (applicationModel) {
    var Application = applicationModel.getMongooseModel();

    var api = {
        createPage: createPage,
        findPagesForApplication: findPagesForApplication
    };
    return api;

    function createPage(applicationId, page) {
        return Application
            .findById(applicationId)
            .then(
                function(application) {
                    application.pages.push(page);
                    return application.save();
                }
            );
    }
    function findPagesForApplication(applicationId) {
        // select() to retrieve a particular field
        return Application.findById(applicationId).select("pages");
    }

};