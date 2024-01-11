class CategoryModel {

    constructor (externalDatabase) {
        this.externalDatabase = externalDatabase;
    }

    async createCategoryModel (categoryDetails) {
        try {
            const category = await this.externalDatabase.createCategory(categoryDetails);
            return category;
        } catch (error) {
            console.error('model {create category}:', error.message);
        }
    }

    async countCategoryModel () {
        try {
            const category = await this.externalDatabase.countCategory();
            return category;
        } catch (error) {
            console.error('model {count category}:', error.message);
        }
    }

    async readAllCategoryModel () {
        try {
            const category = await this.externalDatabase.readAllCategory();
            return category;
        } catch (error) {
            console.error('model {read all category}:', error.message);
        }
    }

    async readCategoryByNameModel (categoryname) {
        try {
            const category = await this.externalDatabase.readCategoryByName(categoryname);
            return category;
        } catch (error) {
            console.error('model {read all category}:', error.message);
        }
    }

    async editCategoryModel (id) {
        try {
            const category = await this.externalDatabase.editCategory(id);
            return category;
        } catch (error) {
            console.error('model {edit category}:', error.message);
        }
    }

    async updateCategoryModel (categoryDetails) {
        try {
            const category = await this.externalDatabase.updateCategory(categoryDetails);
            return category;
        } catch (error) {
            console.error('model {update category}:', error.message);
        }
    }

    async deleteCategoryModel (id) {
        try {
            const category = await this.externalDatabase.deleteCategory(id);
            return category;
        } catch (error) {
            console.error('model {delete category}:', error.message);
        }
    }
}

export default CategoryModel;