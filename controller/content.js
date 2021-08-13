const contentService = require('../service/content')

class ContentController {
    async createContent(req, res){
        try {
            const id = await contentService.createContent(req.body);
            res.status(201).json(id);
        }   catch (err) {
            console.error(err)
        }
     }
 }



 module.exports = new ContentController();