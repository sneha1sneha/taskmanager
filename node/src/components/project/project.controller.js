const ProjectService = require('./project.service');

const ProjectController = {
  /**
   * Handle logging in user.
   * @async
   * @method
   * @param {ExpressRequest} httpRequest
   * @returns {Promise.<ControllerResponse> }
   */
  tasklist: async (httpRequest) => {
    console.log('log')
    const tasklistData = await ProjectService.gettasklist(httpRequest.body);

    return {
      statusCode: 200,
      body: {
        data: tasklistData
      }
    };
  }

};
module.exports = ProjectController;