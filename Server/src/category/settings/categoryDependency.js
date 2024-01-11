import CategoryController from "../controller/categoryController.js";
import CategoryService from "../service/categoryService.js";
import CategoryModel from "../model/categoryModel.js";
import CategoryDatabase from "../database/categoryDatabase.js";

export const categoryDependency = () => {
    const externalDatabase = new CategoryDatabase();
    const categoryModel = new CategoryModel(externalDatabase);
    const categoryService = new CategoryService(categoryModel);
    const categoryController = new CategoryController(categoryService);

    return {categoryController};
}