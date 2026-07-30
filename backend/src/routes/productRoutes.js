import { Router } from "express";
import Product from "../models/Product.js";

const router = Router();
const allowedSlugs = [
  "ai-cctv-cameras",
  "ip-camera-systems",
  "audiovisual-systems",
  "agricultural-ai-drones",
  "access-control",
];

router.get("/", async (req, res) => {
  try {
    const products = await Product.find({ published: true, slug: { $in: allowedSlugs } }).sort({ createdAt: -1 });
    res.json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    if (!allowedSlugs.includes(slug)) {
      return res.status(404).json({ success: false, message: "Product not found." });
    }
    const product = await Product.findOne({ slug });
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found." });
    }
    res.json({ success: true, product });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

export default router;
