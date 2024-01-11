import ArticleController from '../controller/articleController.js'
import ArticleService from '../service/articleService.js'
import ArticleModel from '../model/articleModel.js'
import ArticleDatabase from '../database/articleDatabase.js'

export const articleDependency = () => {
    const externalDatabase = new ArticleDatabase();
    const articleModel = new ArticleModel(externalDatabase);
    const articleService = new ArticleService(articleModel);
    const articleController = new ArticleController(articleService);
    
    return {articleController};
}


