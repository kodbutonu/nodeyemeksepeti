const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  email: { type: String, require: true },
  zaman: { type: String, require: true },
  ad: { type: String, require: true },
  soyad: { type: String, require: true },
  yorum: { type: String, require: true },
});

module.exports = mongoose.model("Contact", ContactSchema);