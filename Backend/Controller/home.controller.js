const { HomeProductModel } = require("../Model/homeproducts.model");

const getHomeProducts = async (req, res) => {
  try {
    const homeProduct = await HomeProductModel.find();
    res.status(200).send(homeProduct);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

const addHomeProduct = async (req, res) => {
  try {
    const data = req.body;
    const product = new HomeProductModel(data);
    await product.save();
    res
      .status(200)
      .send({ message: "A new product has been added to homeProducts" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = { getHomeProducts, addHomeProduct };
