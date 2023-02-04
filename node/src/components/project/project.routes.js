/**
 *
 * @param {Object} ProjectRoutes
 * @param {ExpressRouter} ProjectRoutes.router
 * @param {ProjectController} ProjectRoutes.ProjectController
 * @param {ProjectValidator} ProjectRoutes.ProjectValidator
 * @param {makeExpressCallback} ProjectRoutes.makeExpressCallback
 * @param {makeValidatorCallback} ProjectRoutes.makeValidatorCallback
 * @returns {ExpressRouter}
 */
 module.exports = ({ router, ProjectController, ProjectValidator, makeValidatorCallback, makeExpressCallback }) => {
    console.log("/login/login/login")
    // router.post('/login', makeValidatorCallback(ProjectValidator.validateLogin), makeExpressCallback(ProjectController.login));
    router.get('/tasklist', makeExpressCallback(ProjectController.tasklist));
  
    return router;
  };
