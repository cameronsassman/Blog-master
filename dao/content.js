const db = require('../db/knex');

class ContentDAO {
    async createContent(Title, Article) {
        const [id] = await db('Content')
            .insert({
                Title,
                Article
            })
            .returning('id', 'Title', 'Article');
        
        return id;
    }
}

 module.exports = new ContentDAO();