const mongoose = require("mongoose");

const produitSchema = mongoose.Schema({
  titre: { type: String, require: true },
  description: { type: String, require: true },
  prix: { type: Number, require: true },

});

module.exports = mongoose.model("Produit", produitSchema);;
