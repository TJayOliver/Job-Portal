class ArticleModel {
    
    constructor (externalDatabase) {
        this.externalDatabase = externalDatabase;
    }

    async createArticleModel (articleData) {
        try {
            const article = await this.externalDatabase.createArticle(articleData)
            return article;
        } catch (error) {
            console.error('model {create article}:', error.message)
            throw error;
        }
    }

    async countArticleModel () {
        try {
            const article = await this.externalDatabase.countArticle();
            return article;
        } catch (error) {
            console.error('model {count article}:', error.message);
            throw error;
        }
    }

    async readAllArticleModel () {
        try {
           const article = await this.externalDatabase.readAllArticles();
           return article; 
        } catch (error) {
            console.error('model {read all articles}:', error.message)
            throw error;
        }
    }

    async readArticleByIdModel (articleID) {
        try {
            const article = await this.externalDatabase.readArticleById(articleID);
            return article;
        } catch (error) {
            console.error('model {read article by id}:', error.message);
            throw error;
        }
    }

    async readArticleByCategoryModel (articleCategory) {
        try {
            const article = await this.externalDatabase.readArticleByCategory(articleCategory);
            return article;
        } catch (error) {
            console.error('model {read article by category}:', error.message);
            throw error;
        }
    }

    async readFeaturedArticleModel (articleValue) {
        try {
            const article = await this.externalDatabase.readFeaturedArticle(articleValue);
            return article;
        } catch (error) {
            console.error('model {read featured article}:', error.message)
            throw error;
        }
    }

    async readMainFeaturedArticleModel (articleValue) {
        try {
            const article = await this.externalDatabase.readMainFeaturedArticle(articleValue);
            return article;
        } catch (error) {
            console.error('model {read main featured article}:', error.message)
            throw error;
        }
    }

    async readMustReadArticleModel (articleValue) {
        try {
            const article = await this.externalDatabase.readMustReadArticle(articleValue);
            return article;
        } catch (error) {
            console.error('model {read must read article}:', error.message)
            throw error;
        }
    }

    async editArticleModel (articleID) {
        try {
            const article = await this.externalDatabase.editArticle(articleID);
            return article;
        } catch (error) {
            console.error('model {edit article}:',error.message);
            throw error;
        }
    }

    async updateArticleModel (articleData) {
        try {
            const article = await this.externalDatabase.updateArticle(articleData);
            return article;
        } catch (error) {
            console.error('model {update article}:', error.message);
            throw error;
        }
    }

    async deleteArticleModel (articleID) {
        try {
            const article = await this.externalDatabase.deleteArticle(articleID);
            return article;
        } catch (error) {
            console.error('model {delete article}:', error.message)
            throw error;
        }
    }
}

export default ArticleModel;