const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  imagePath: { type: String, require: true },
  title: { type: String, require: true },
  fiyat: { type: Number, require: true },
  toplamfiyat: { type: Number, require: true },
  imageSepet:{ type: String, require: true },
});

module.exports = mongoose.model("Product", ProductSchema);