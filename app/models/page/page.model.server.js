/**
 * Created by yangyang on 4/3/16.
 */
module.exports = function (applicationModel) {
    var Application = applicationModel.getMongooseModel();

    var api = {
        createPage: createPage,
        findPagesForApplication: findPagesForApplication,
        findPage: findPage,
        removePage: removePage,
        updatePage: updatePage
    };
    return api;

    function createPage(applicationId, page) {
        return Application
            .findById(applicationId)
            .then(
                function (application) {
                    application.pages.push(page);
                    return application.save();
                }
            );
    }

    function findPagesForApplication(applicationId) {
        // select() to retrieve a particular field
        return Application.findById(applicationId).select("pages");
    }

    function findPage(applicationId, pageId) {
        return Application
            .findById(applicationId)
            .then(
                function (application) {
                    return application.pages.id(pageId);
                }
            );
    }

    function removePage(applicationId, pageId) {
        return Application
            .findById(applicationId)
            .then(
                function (application) {
                    application.pages.id(pageId).remove();
                    return application.save();
                }
            );
    }

    function updatePage(applicationId, pageObj) {
        return Application
            .findById(applicationId)
            .then(
                function (application) {
                    var page = application.pages.id(pageObj._id);
                    console.log(page);
                    page.name = pageObj.name;
                    page.title = pageObj.title;
                    return application.save();
                }
            );
    }

};