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
  //  tasklist with user id
    router.get('/tasklist',authorization, makeExpressCallback(ProjectController.tasklist));

    router.get('/projectlist', authorization,makeExpressCallback(ProjectController.projectlist));

    router.get('/employeelist',authorization, makeExpressCallback(ProjectController.employeelist));

    router.post('/addproject',authorization, makeExpressCallback(ProjectController. addproject));
    router.put('/updateproject',authorization, makeExpressCallback(ProjectController. updateproject));
    router.delete('/deleteproject',authorization, makeExpressCallback(ProjectController. deleteproject));

    router.post('/addtask', makeExpressCallback(ProjectController.addtask));
    router.get('/taskbyid/:id', makeExpressCallback(ProjectController.taskbyid));
    router.put('/managetask/:id',makeExpressCallback(ProjectController.managetask));



    router.put('/managetaskadmin/:id',makeExpressCallback(ProjectController.managetaskadmin));
    router.put('/delete/:id',makeExpressCallback(ProjectController.delete));

  
    return router;
  };

