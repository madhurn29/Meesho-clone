const { OrderModel } = require("../Model/order.model");

const getOrderProducts = async (req, res) => {
  const token = req.headers.authorization;

  //   const decoded = jwt.verify(token, "meesho");

  try {
    const orders = await OrderModel.find();
    res.status(200).send(orders);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const addOrderProduct = async (req, res) => {
  try {
    const data = req.body;

    const product = new OrderModel(data);
    await product.save();
    res.status(200).send({ message: "A new order has been added" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const updateOrderProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    await OrderModel.findByIdAndUpdate({ _id: id }, data);
    res.status(200).send({ message: "Order product has been updated" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteOrderProduct = async (req, res) => {
  try {
    const id = req.params.id;
    await OrderModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ message: "Order has been deleted" });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports = {
  deleteOrderProduct,
  updateOrderProduct,
  addOrderProduct,
  getOrderProducts,
};
