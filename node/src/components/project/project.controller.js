const { http } = require('winston');
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
        console.log('log',httpRequest)
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


    projectlist: async (httpRequest) => {
      console.log('log')
      // Call the getTaskList function from ProjectService to retrieve the task list
      const projectlistData = await ProjectService.getprojectlist(httpRequest);
      // Return the task list data with a status code of 200
      return {
          statusCode: 200,
          body: {
              data: projectlistData
          }
      };
  },





  employeelist: async (httpRequest) => {
    console.log('log')
    // Call the getemployeeList function from ProjectService to retrieve the task list
    const employeelistData = await ProjectService.GetEmployeeList(httpRequest);
    // Return the employee list data with a status code of 200
    return {
        statusCode: 200,
        body: {
            data: employeelistData
        }
    };
},





    addproject: async (httpRequest) => {
        console.log('AA')
        // Call the doaddproject function from AuthService to handle the registration
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
        // Call the doaddtask function from AuthService to handle the registration
        const addtaskdata = await ProjectService.doaddtask(httpRequest.body);
    // Return the insertion values with a status code of 200
        return {
          statusCode: 200,
          body: {
            data:  addtaskdata
          }
        };
      },

      taskbyid: async (httpRequest) => {
        console.log('log')
        // Call the getTaskList function from ProjectService to retrieve the task list
        const taskbyidData = await ProjectService.gettaskbyid(httpRequest);
        // Return the task list data with a status code of 200
        return {
            statusCode: 200,
            body: {
                data: taskbyidData
            }
        };
    },

      managetask: async (httpRequest) => {
        console.log('AA')
        // Call the domanagetask function from AuthService to handle the registration
        const managetaskdata = await ProjectService.domanagetask(httpRequest);
    // Return the insertion values with a status code of 200
        return {
          statusCode: 200,
          body: {
            data:  managetaskdata
          }
        };
      },



      managetaskadmin: async (httpRequest) => {
        console.log('AA')
        // Call the domanagetask function from AuthService to handle the registration
        const managetaskadmindata = await ProjectService.domanagetaskadmin(httpRequest);
    // Return the insertion values with a status code of 200
        return {
          statusCode: 200,
          body: {
            data:  managetaskadmindata
          }
        };
      },

      delete: async (httpRequest) => {
        console.log('AA')
        // Call the domanagetask function from AuthService to handle the registration
        const deletedata = await ProjectService.dodelete(httpRequest);
    // Return the insertion values with a status code of 200
        return {
          statusCode: 200,
          body: {
            data:  deletedata
          }
        };
      }


    };
module.exports = ProjectController;