import Product from "../models/Product.js";

const allowedSlugs = [
  "ai-cctv-cameras",
  "ip-camera-systems",
  "audiovisual-systems",
  "agricultural-ai-drones",
  "access-control",
];

export const listProducts = async (req, res, next) => {
  try {
    const products = await Product.find({ slug: { $in: allowedSlugs } }).sort({ createdAt: -1 });
    res.json({ success: true, products });
  } catch (err) {
    next(err);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const { title, slug, description, price, images, published } = req.body;
    const product = await Product.create({ title, slug, description, price, images, published });
    res.status(201).json({ success: true, product });
  } catch (err) {
    next(err);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: "Product not found." });
    Object.assign(product, req.body);
    await product.save();
    res.json({ success: true, product });
  } catch (err) {
    next(err);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ success: false, message: "Product not found." });
    await product.deleteOne();
    res.json({ success: true, message: "Product deleted." });
  } catch (err) {
    next(err);
  }
};
