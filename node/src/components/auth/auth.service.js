const bcrypt = require('bcryptjs');
const { User } = require('../../db/models');
const JwtService = require('./jwt.service');
const db = require('../../db/db.js');
const { BadRequestError, NotFoundError } = require('../../utils/api-errors');
const logger = require('../../support/logger');
const AuthService = {

  /**
   * Login a user and generate token.
   * @async
   * @method
   * @param {UserDto} requestBody - Request Body
   * @returns {Context} Context object
   * @throws {NotFoundError} When the user is not found.
   */

  doLogin: async (requestBody) => {

    try {
      const { username, password } = requestBody;
      let queryObj = `select * from user where username = '${username}' and  password = '${password}';`;
      const resultObj = await db.promise(queryObj);

      if (resultObj.length == 0) {
        throw new BadRequestError('Username or Password is invalid!');
      }

      payload = {
        userId: resultObj[0].user_id,
        role: "user",
        username: resultObj[0].username,
       
      };

      const accessToken = await JwtService.generateJWT({
        payload
      });
      return {
        accessToken,
       
        ...payload
      };

    } catch (error) {
      logger.error(error);
    }


  },


  doRegister: async (requestBody) => {
    try {
      const { username, password, firstname, lastname, email } = requestBody;
      var sqlObj = `INSERT INTO user VALUES (?,?,?,?,?,?)`;
      // making db call for inset user in to user_account table with role table inserion 
      const resultObj = await db.promise(sqlObj, [, username, password, firstname, lastname, email])
        .then((result) => {
          console.log("result", result)
          // get inserted user id from previous query
          let queryObj = `select user_id from user where user_id = '${result.insertId}'`;
          return db.promise(queryObj);
        }).then((result) => {
          // insert useride into rolelist table with user role as static
          let roleid = 1; // user role type value = 1 and dadmin type = 2
          let queryObj = `INSERT INTO role_list VALUES (?,?,?)`;
          return db.promise(queryObj, [, roleid, result[0].user_id]);
        })
        .catch((err) => {
          // write error into logger file
          console.log("catch error ", err);
        });

      if (resultObj.length == 0) {
        //
        logger.error("doRegister() Insert failed");
        //
        throw new BadRequestError('Insert failed');
      }
      return {
        resultObj
      };
    } catch (error) {
      logger.error("doRegister()" + error);
    }

  }





};

module.exports = AuthService;
