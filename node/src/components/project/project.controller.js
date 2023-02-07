const ProjectService = require('./project.service');

const ProjectController = {
    /**
     * Handle logging in user.
     * @async
     * @method
     * @param {ExpressRequest} httpRequest
     * @returns {Promise.<ControllerResponse> }
     */
    // Function to handle retrieving a list of tasks

    tasklist: async (httpRequest) => {
        console.log('log')
        // Call the getTaskList function from ProjectService to retrieve the task list
        const tasklistData = await ProjectService.gettasklist(httpRequest);
        // Return the task list data with a status code of 200
        return {
            statusCode: 200,
            body: {
                data: tasklistData
            }
        };
    },


    addproject: async (httpRequest) => {
        console.log('AA')
        // Call the doRegister function from AuthService to handle the registration
        const addprojectdata = await ProjectService.doaddproject(httpRequest.body);
    // Return the insertion values with a status code of 200
        return {
          statusCode: 200,
          body: {
            data:  addprojectdata
          }
        };
      },




      addtask: async (httpRequest) => {
        console.log('AA')
        // Call the doRegister function from AuthService to handle the registration
        const addtaskdata = await ProjectService.doaddtask(httpRequest.body);
    // Return the insertion values with a status code of 200
        return {
          statusCode: 200,
          body: {
            data:  addtaskdata
          }
        };
      },



      managetask: async (httpRequest) => {
        console.log('AA')
        // Call the doRegister function from AuthService to handle the registration
        const managetaskdata = await ProjectService.domanagetask(httpRequest.body);
    // Return the insertion values with a status code of 200
        return {
          statusCode: 200,
          body: {
            data:  managetaskdata
          }
        };
      }



    };
module.exports = ProjectController;