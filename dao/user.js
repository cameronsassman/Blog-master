const db = require('../db/knex');

class UserDAO {
    async createUser(Name, Surname, Email, Username, Password) {
        const [id] = await db('User')
            .insert({
                Name, 
                Surname,
                Email, 
                Username, 
                Password
            })
            .returning('id');
        
        return id;
    }
}

 module.exports = new UserDAO();