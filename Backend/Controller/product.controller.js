const { ProductModel } = require("../Model/products.model");

//*--------this is to control the get product routes----------//
const getProducts = async (req, res) => {
  try {
    const products = await ProductModel.find();
    res.status(200).send(products);
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

module.exports = { getProducts, addProduct, updateProduct, deleteProduct };
