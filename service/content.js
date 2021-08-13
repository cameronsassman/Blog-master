const contentDAO = require('../dao/content');

class ContentService {
     createContent(contentDto){
        const { Title, Article } = contentDto
        return contentDAO.createContent(Title, Article);
     }
 }

 module.exports = new ContentService();