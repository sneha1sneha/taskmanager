const AuthService = require('./auth.service');

const AuthController = {
  /**
   * Handle logging in user.
   * @async
   * @method
   * @param {ExpressRequest} httpRequest
   * @returns {Promise.<ControllerResponse> }
   */
  login: async (httpRequest) => {
    console.log('log')
    const loginData = await AuthService.doLogin(httpRequest.body);

    return {
      statusCode: 200,
      body: {
        data: loginData
      }
    };
  }
,


  register: async (httpRequest) => {
    console.log('AA')
    const registerdata = await AuthService.doRegister(httpRequest.body);

    return {
      statusCode: 200,
      body: {
        data: registerdata
      }
    };
  }

};

module.exports = AuthController;