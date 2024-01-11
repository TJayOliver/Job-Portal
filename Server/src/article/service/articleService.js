import { cacheTime, myCache } from '../../../configuration/cache.config.js';
import {id} from '../../../configuration/nanoid.config.js';

class ArticleService{
    
    constructor (model) {
        this.model = model;
    }

    async createArticleService ({title,post,featured,mustread, mainfeatured, category, image}) {
        try {
            const articleData = {
                id, 
                title,
                post,
                featured,
                mustread, 
                mainfeatured, 
                category, 
                image
            };
            const article = await this.model.createArticleModel(articleData);
            return article;
        } catch (error) {
            console.error('service {create article}:', error.message);
            throw error;
        }
    }

    async countArticleService () {
        try{
            const article = await this.model.countArticleModel();
            let count = "";
            article.map((newData)=>{
                const number = Object.values(newData);
                count += number;
            });
            return count;
        } catch (error) {
            console.error('service {count article}:', error.message);
            throw error;
        }
    }

    async readAllArticleService () {  
        const cacheKey = 'readArticle';     
        try{
            const cachedData = await myCache.get(cacheKey);
            if (cachedData) return cachedData;
            const article = await this.model.readAllArticleModel();
            myCache.set(cacheKey, article, cacheTime)
            return article;
        } catch (error) {
            console.error('service {real all articles}', error.message);
            throw error;
        }
    }

    async readArticleByIdService (id) {
        const cacheKey = 'readArticleById'
        try {
            const cachedData = await myCache.get(cacheKey);
            if (cachedData) {
                return cachedData;
            }
            const article = await this.model.readArticleByIdModel(id);
            myCache.set(cacheKey, article, cacheTime);
            return article;
        } catch (error) {
            console.error('service {read article by id}',error.message);
            throw error;
        }
    }

    async readArticleByCategoryService (articleCategory) {
        const cacheKey = 'articleCategory';
        try {
            const data = await myCache.get(cacheKey);
            if (data) return data;
            const article = await this.model.readArticleByCategoryModel(articleCategory);
            myCache.set(cacheKey, article, cacheTime);
            return article;
        } catch (error) {
            console.error('service {read article by category}', error.message);
            throw error;
        }
    }

    async readFeaturedArticleService (articleValue) {
        const cacheKey = 'readfeaturedarticle';
        try {
            const data = await myCache.get(cacheKey);
            if (data) return data;
            const article = await this.model.readFeaturedArticleModel(articleValue);
            myCache.set(cacheKey, article, cacheTime);
            return article;
        } catch(error) {
            console.error('service {read featured article}', error.message)
            throw error;
        }
    }

    async readMainFeaturedArticleService (articleValue) {
        const cacheKey = 'readmainfeaturedarticle'
        try {
            const data = await myCache.get(cacheKey);
            if (data) return data;
            const article = await this.model.readMainFeaturedArticleModel(articleValue);
            myCache.set(cacheKey, article, cacheTime)
            return article;
        } catch(error) {
            console.error('service {read main featured article}:', error.message)
            throw error;
        }
    }

    async readMustReadArticleService (articleValue) {
        const cacheKey = 'mustreadarticles';
        try {
            const data = await myCache.get(cacheKey);
            if (data) return data;
            const article = await this.model.readMustReadArticleModel(articleValue);
            myCache.set(cacheKey, article, cacheTime);
            return article;
        } catch (error) {
            console.error('service {read must read article}:', error.message)
            throw error;
        }
    }

    async editArticleService (id) {
        try {
            const article = await this.model.editArticleModel(id);
            return article;
        } catch(error) {
            console.error('service {edit article}:', error.message);
            throw error;
        }
    }

    async updateArticleService ({id,title, post,featured,mustread, mainfeatured, category, image}) {
        try {
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
            const article = await this.model.updateArticleModel(articleData);
            return article;
        } catch (error) {
            console.error('service {update article}', error.message)
            throw error;
        }
    }

    async deleteArticleService (id) {
        try {
            const article = await this.model.deleteArticleModel(id)
            return article;
        } catch(error) {
            console.error('service {delete article}', error.message);
            throw error;
        }
    }
}


export default ArticleService;


