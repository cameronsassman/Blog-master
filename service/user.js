const userDAO = require('../dao/user');

class UserService {
    createUser(userDto){
        const { Name, Surname, Email, Username, Password } = userDto
        return userDAO.createUser(Name, Surname, Email, Username, Password);
    }
 }

 module.exports = new UserService();