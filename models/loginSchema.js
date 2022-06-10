const mongoose = require("mongoose");

const schema = mongoose.Schema;
const userSchema = new schema({
  email: { type: String, require: true, unique: true },
  parola: { type: String, require: true, unique: true },
  ad: { type: String, require: true, unique: true },
  soyad: { type: String, require: true, unique: true },
  date: { type: Date, default: Date.now },
  sepet: {type: Array,default: []},
});

const userModel = mongoose.model("user", userSchema);
module.exports.userModel = userModel;
