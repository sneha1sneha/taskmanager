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
 const authorization = require('../../middlewares/auth');
 module.exports = ({ router, ProjectController, ProjectValidator, makeValidatorCallback, makeExpressCallback }) => {
    console.log("/login/login/login")
   
    router.get('/tasklist/:id', makeExpressCallback(ProjectController.tasklist));

    router.get('/addproject', makeExpressCallback(ProjectController. addproject));


    router.get('/addtask', makeExpressCallback(ProjectController.addtask));
  
    return router;
  };
