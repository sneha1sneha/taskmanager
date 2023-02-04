



const { User } = require('../../db/models');
// const JwtService = require('./jwt.service');
const db = require('../../db/db.js');
const { BadRequestError, NotFoundError } = require('../../utils/api-errors');
const logger = require('../../support/logger');
const  ProjectService = {

  /**
   * Login a user and generate token.
   * @async
   * @method
   * @param {UserDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} When the user is not found.
   */

   gettasklist: async (requestBody) => {

    try {
    //   const { username, password } = requestBody;
    // task_name,description
   

      let queryObj = `select  * from task ;`
      const resultObj = await db.promise(queryObj);
      console.log("resultObj", JSON.stringify(resultObj))
     return resultObj;


    //   if (resultObj.length == 0) {
    //     throw new BadRequestError('Username or Password is invalid!');
    //   }

    //   payload = {
    //     userId: resultObj[0].userId,
    //     role: 'user',
    //     username: resultObj[0].username
    //   };

    //   const accessToken = await JwtService.generateJWT({
    //     payload
    //   });
    //   return {
    //     accessToken,
    //     ...payload
    //   };

    } catch (error) {
      logger.error(error);
    }


  }
};
module.exports = ProjectService;