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
      let queryObj = `select * from register where username = '${username}' and  password = '${password}';`;
      const resultObj = await db.promise(queryObj);

      if (resultObj.length == 0) {
        throw new BadRequestError('Username or Password is invalid!');
      }

      payload = {
        userId: resultObj[0].userId,
        role: 'user',
        username: resultObj[0].username
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
    const { username, password, email, first_name, last_name } = requestBody;
    let checkUseremailQuery = `select * from register where username = '${username}';`;
    const checkUseremailResult = await db.promise(checkUseremailQuery);
    if (checkUseremailResult.length > 0) {
      throw new BadRequestError('Username already exists!');
    } else {
      let insertQuery = `insert into register  (username, password,email,first_name,last_name) values ('${username}','${password}','${email}','${first_name}','${last_name}');`;
      console.log(insertQuery);
      await db.promise(insertQuery);

      let selectQuery = `select * from register where username = '${username}';`;
      console.log(selectQuery);
      const selectResult = await db.promise(selectQuery);
      console.log(selectResult);

      payload = {
        userId: selectResult[0].uid,
        role: 'user',
        username: selectResult[0].username
      };
    }
  }
};

module.exports = AuthService;
