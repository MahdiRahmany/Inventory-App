import Storage from "./Storage.js";

const title = document.querySelector("#category-title");
const description = document.querySelector("#category-description");
const addNewCategoryBtn = document.querySelector("#add-new-category");

class CategoryView {
  constructor() {
    addNewCategoryBtn.addEventListener("click", (e) => this.addNewCategoryBtn);
    this.categories = [];
  }
  addNewCategoryBtn(e) {
    e.preventDefult();
    const title = title.value;
    const description = description.value;
    if (!title || !description) return;
    Storage.saveCategory({ title, description });
    this.categories = Storage.getAllCategories();
  }
}
