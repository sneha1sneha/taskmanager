



const { User } = require('../../db/models');
// const JwtService = require('./jwt.service');
const db = require('../../db/db.js');
const { BadRequestError, NotFoundError } = require('../../utils/api-errors');
const logger = require('../../support/logger');
const { any } = require('@hapi/joi');
const ProjectService = {

    /**
     * Login a user and generate token.
     * @async
     * @method
     * @param {UserDto} httpRequest - Request Body
     * @returns {Context} Context object
     * @throws {NotFoundError} When the user is not found.
     */

    // Function to retrieve a list of tasks from the database
    gettasklist: async (httpRequest) => {
        console.log("httpRequest", httpRequest);
        let id = httpRequest.params.id;
        try {
            // SQL query to select all tasks from the "task" table

            let queryObj = `SELECT t.id, t.task_name, t.description, p.project_name ,s.status_type
                    FROM trial.task t
                    LEFT JOIN trial.project p
                    ON t.project_id = p.id
                    LEFT JOIN trial.status  s
                    ON  t.Status_id = s.id
                    WHERE t.user_id3 ='${id}';`;

            // let queryObj = `SELECT * FROM task; `;
            // Execute the query and store the result in "taskList"
            const resultObj = await db.promise(queryObj);
            console.log("resultObj", JSON.stringify(resultObj))
            // Return the task list to the caller
            return resultObj;

        } catch (error) {
            // Log any errors that occur
            logger.error(error);
        }


    },

    getprojectlist: async (httpRequest) => {
       
        
        try {

            let queryObj = `SELECT id,project_name FROM project; `;
            // Execute the query and store the result in "taskList"
            const resultObj = await db.promise(queryObj);
            console.log("resultObj", JSON.stringify(resultObj))
            // Return the task list to the caller
            return resultObj;

        } catch (error) {
            // Log any errors that occur
            logger.error(error);
        }


    },


    GetEmployeeList: async (httpRequest) => {
       
        
        try {

            let queryObj = `SELECT user_id,username FROM user; `;
            // Execute the query and store the result in "taskList"
            const resultObj = await db.promise(queryObj);
            console.log("resultObj", JSON.stringify(resultObj))
            // Return the task list to the caller
            return resultObj;

        } catch (error) {
            // Log any errors that occur
            logger.error(error);
        }


    },






    // add project  function

    doaddproject: async (requestBody) => {


        const { project_name, planned_start_date, planned_end_date, actual_start_date, actual_end_date, project_description } = requestBody;
        let queryObj = `INSERT INTO project(project_name, planned_start_date, planned_end_date, actual_start_date, actual_end_date, project_description) VALUES("${project_name}", "${planned_start_date}", "${planned_end_date}", "${actual_start_date}", "${actual_end_date}", "${project_description}")`;

        const resultObj = await db.promise(queryObj);
        //  console.log(resultObj)
        return resultObj;
        //   if (resultObj.length == 0) {
        //     throw new BadRequestError('Username or Password is invalid!');
        //   }


    },


    doaddtask: async (requestBody) => {


        const {task_name,project_name,description,planned_start_date,planned_end_date,planned_budget,actual_start_date,actual_end_date,actual_budget,status_type,username} = requestBody;  
        let queryObj=`INSERT INTO task (task_name, description, planned_start_date, planned_end_date, planned_budget, actual_start_date, actual_end_date, actual_budget, project_id, Status_id, user_id3)
        SELECT '${task_name}', '${description}', '${planned_start_date}', '${planned_end_date}','${planned_budget}', '${actual_start_date}', '${actual_end_date}','${actual_budget}', project.id, status.id, user_id
        FROM status, user, project
        WHERE status.status_type = "pending"
        AND project.project_name = '${project_name}'
        AND user.username = '${username}'
        ;`;
        const resultObj = await db.promise(queryObj);

      return resultObj;



      },


    gettaskbyid: async (httpRequest) => {
        let id = httpRequest.params.id;
        console.log(id)
        
        try {

            let queryObj = `SELECT  t.task_name, t.description, p.project_name ,s.status_type
            FROM trial.task t
            LEFT JOIN trial.project p
            ON t.project_id = p.id
            LEFT JOIN trial.status  s
            ON  t.Status_id = s.id
            WHERE t.id =${id}; `;
            // Execute the query and store the result in "taskList"
            const resultObj = await db.promise(queryObj);
            console.log("resultObj", JSON.stringify(resultObj))
            // Return the task list to the caller
            return resultObj;

        } catch (error) {
            // Log any errors that occur
            logger.error(error);
        }


    },





domanagetask: async (httpRequest) => {
    console.log("httpRequest",httpRequest)
    let id = httpRequest.params.id;
    console.log("num",id)
    const {task_name,project_name,description,planned_start_date,planned_end_date,planned_budget,actual_start_date,actual_end_date,actual_budget,status_type,user_id3} = httpRequest.body; 
    let queryObj = `UPDATE task
    SET Status_id = (SELECT id FROM status WHERE status_type = '${status_type}')
    WHERE task_name = '${task_name}'
    AND project_id = (SELECT id FROM project WHERE project_name = '${project_name}')
    AND user_id3 ='${id}';`;
    const resultObj = await db.promise(queryObj);
    console.log(resultObj)
    return resultObj;

      },


      



};
module.exports = ProjectService;
