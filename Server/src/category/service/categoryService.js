import {id} from '../../../configuration/nanoid.config.js';

class CategoryService {
    
    constructor (model) {
        this.model = model;
    }

    async createCategoryService (categoryname) {
        try {
            const checkCategory = await this.model.readCategoryByNameModel(categoryname);
            if (checkCategory.length > 0) return {error : `${categoryname} Already Exist`}
            const categoryDetails = {
                id,
                categoryname
            }
            const category = await this.model.createCategoryModel(categoryDetails);
            return category;
        } catch (error) {
            console.error('service {create category}:', error.message);
        }
    }

    async countCategoryService () {
        try {
            const categoryy = await this.model.countCategoryModel();
            let category = "";
            categoryy.map((newData)=>{
                const counter = Object.values(newData);
                category += counter;
            });
            return category;
        } catch (error) {
            console.error('service {count category}:', error.message)
        }
    }

    async readAllCategoryService () {
        try {
            const category = await this.model.readAllCategoryModel();
            return category;
        } catch (error) {
            console.error('service {read all category}:', error.message);
        }
    }

    async editCategoryService (id) {
        try {
            const category = await this.model.editCategoryModel(id);
            return category;
        } catch (error) {
            console.error('service {edit category}:', error.message);
        }
    }

    async updateCategoryService (categoryDetails) {
        try {
            const category = await this.model.updateCategoryModel(categoryDetails);
            return category;
        } catch (error) {
            console.error('service {update category}:', error.message)
        }
    }

    async deleteCategoryService (id) {
        try {
            const category = await this.model.deleteCategoryModel(id);
            return category;
        } catch (error) {
            console.error('service {delete category}:', error.message);
        }
    }
}

export default CategoryService;