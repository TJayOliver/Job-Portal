class ArticleController {

    constructor (service) {
        this.service = service;
    }
    
    async createArticle (req, res) {
        try {
            const {title,post,featured,mustread, mainfeatured, category} = req.body;
            const image = req.file.filename;
            const articleData = {
                title,
                post,
                featured,
                mustread, 
                mainfeatured, 
                category, 
                image
            }
            const article = await this.service.createArticleService(articleData);
            return res.status(201).json({message: 'Successfully Created', data : article})   
        } catch (error) {
            console.error('controller {create article}:', error.message)
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async countArticle (req, res) {
        try {
            const article = await this.service.countArticleService();
            return res.status(201).json({data : article});
        } catch (error) {
            console.error('controller {count article}:', error.message)
            return res.status(500).json({message:'Internal Server Error'})
        }
    }

    async readAllArticle (req, res) {
        try {
            const articles = await this.service.readAllArticleService();
            return res.status(201).json({message : 'Successfully Retrieved', data : articles});
        } catch (error) {
            console.error('controller {read all articles}:', error.message)
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async readArticleByID (req, res) {
        try {
            const {id} = req.params;
            const article = await this.service.readArticleByIdService(id);
            return res.status(201).json({message:'Successfully Received', data : article});
        } catch (error) {
            console.error('controller {read article by id}:', error.message)
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async readArticleByCategory (req, res) {
        try {
            const {category} = req.params;
            const article = await this.service.readArticleByCategoryService(category);
            return res.status(201).json({message:'Retrieved Successfully', data : article})
        } catch (error) {
            console.error('controller {read article by category}:', error.message)
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async readFeaturedArticle (req, res) {
        try{
            const value = 'true';
            const article = await this.service.readFeaturedArticleService(value);
            return res.status(201).json({message:'Successfully Received', data : article})
        }catch(error){
            console.error('controller {read featured article}:', error.message)
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async readMainFeaturedArticle (req, res) {
        try{
            const value = 'true';
            const article = await this.service.readMainFeaturedArticleService(value);
            return res.status(201).json({message:'Successfully Retrieved', data : article})
        }catch(error){
            console.error('controller {read main featured article}:', error.message)
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async readMustReadArticle (req, res) {
        try{
            const value = 'true';
            const article = await this.service.readMustReadArticleService(value);
            return res.status(201).json({message:'Successfully Retrieved', data : article})
        }catch(error){
            console.error('controller {read must read article}:', error.message)
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async editArticle (req, res) {
        const {id} = req.params;
        try{
            const article = await this.service.editArticleService(id);
            return res.status(201).json({message:'Successfully Deleted', data : article})
        }catch(error){
            console.error('controller {edit article}:', error.message)
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async updateArticle (req, res) {
        try{
            const {id} = req.params;
            const {title,post,featured,mustread, mainfeatured, category} = req.body;
            const image = req.file.filename;
            const articleData = {
                id,
                title, 
                post,
                featured,
                mustread, 
                mainfeatured, 
                category,
                image
            }
            const article = await this.service.updateArticleService(articleData);
            res.status(201).json({message:'Successfully Updated', data : article})
        }catch(error){
            console.error('controller {update article}:', error.message)
            res.status(500).json({message:'Internal Server Error'})
        }
    }

    async deleteArticle (req, res) {
        try{
            const {id} = req.params;
            const article = await this.service.deleteArticleService(id);
            return res.status(201).json(article.message);
        }catch(error){
            console.error('controller {delete article}:', error.message)
            res.status(500).json({message:'Internal Server Error'})
        }
    }
}

export default ArticleController;


