const product = [
  {
    id: 1,
    title: "React.js",
    category: "frontend",
    createdAt: "2024-07-28T21:16:32.644Z",
  },
  {
    id: 2,
    title: "Node.js",
    category: "backend",
    createdAt: "2024-07-28T22:25:32.436Z",
  },
  {
    id: 3,
    title: "Vue.js",
    category: "backend",
    createdAt: "2024-07-28T23:43:32.645Z",
  },
];

const category = [
  {
    id: 1,
    title: "frontend",
    description: "frontend of application",
    createdAt: "2024-06-28T23:43:32.645Z",
  },
  {
    id: 2,
    title: "backend",
    description: "the backend of application",
    createdAt: "2024-06-27T23:43:32.645Z",
  },
];

export default class Storage {
  static getAllCategories(sort = "newest") {
    const savedCategories = JSON.parse(localStorage.getItem("category")) || [];

    return savedCategories.sort((a, b) => {
      if (sort === "newest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      } else if (sort === "oldest") {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      }
    });
  }
  static saveCategory(categoryToSave) {
    const savedCategories = Storage.getAllCategories();
    const existedItem = savedCategories.find((c) => c.id === categoryToSave.id);
    if (existedItem) {
      existedItem.title = categoryToSave.title;
      existedItem.description = categoryToSave.description;
    } else {
      categoryToSave.id = new Date().getTime();
      categoryToSave.createdAt = new Date().toISOString();
      savedCategories.push(categoryToSave);
    }
    localStorage.setItem("category", JSON.stringify(savedCategories));
  }
  static getAllProducts() {
    const savedProducts = JSON.parse(localStorage.getItem("product")) || [];

    return savedProducts.sort((a, b) =>
      new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1
    );
  }
  static saveProduct(productToSave) {
    const savedProducts = Storage.getAllProducts();
    const existedItem = savedProducts.find((c) => c.id === productToSave.id);
    if (existedItem) {
      existedItem.title = productToSave.title;
      existedItem.quantity = productToSave.quantity;
      existedItem.category = productToSave.category;
    } else {
      productToSave.id = new Date().getTime();
      productToSave.createdAt = new Date().toISOString();
      savedProducts.push(productToSave);
    }
    localStorage.setItem("product", JSON.stringify(savedProducts));
  }
}
