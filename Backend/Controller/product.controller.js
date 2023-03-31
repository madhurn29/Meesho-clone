const { ProductModel } = require("../Model/products.model");

//*--------this is to control the get product routes----------//
const getProducts = async (req, res) => {
  const query = req.query;
  const categoryQuery = {};
  const sortQuery = {};
  let limit = query.limit || 12;
  let skipQuery;
  if (query.category) {
    categoryQuery.category = query.category;
  }

  if (query.sortBy === "price") {
    if (query.order === "asc") {
      sortQuery.price = 1;
    } else if (query.order === "desc") {
      sortQuery.price = -1;
    }
  } else if (query.sortBy === "rating") {
    if (query.order === "asc") {
      sortQuery.rating = 1;
    } else if (query.order === "des") {
      sortQuery.rating - 1;
    }
  }

  if (query.page) {
    skipQuery = (query.page - 1) * limit;
    try {
      const products = await ProductModel.find(categoryQuery)
        .sort(sortQuery)
        .skip(skipQuery)
        .limit(limit);

      const length = await ProductModel.find(categoryQuery).count();

      res.status(200).send({ products, length });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  } else {
    try {
      const products = await ProductModel.find(categoryQuery).sort(sortQuery);

      res.status(200).send(products);
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  }
};
//*--------this is to control the get product by ID routes----------//
const getProductsbyID = async (req, res) => {
  const id = req.params.id;
  try {
    const products = await ProductModel.findById({ _id: id });
    res.status(200).send({ products });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//*--------this is to control the add product routes----------//
const addProduct = async (req, res) => {
  try {
    const data = req.body;
    const product = new ProductModel(data);
    await product.save();
    res.status(200).send({ message: "A new product has been added" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//*--------this is to control the update product routes----------//
const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await ProductModel.findByIdAndUpdate({ _id: id }, data);
    res.status(200).send({ message: "Product has been updated" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

//*--------this is to control the delete product routes----------//
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await ProductModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ message: "Product has been deleted" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getProductsbyID,
};
