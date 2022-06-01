const express = require("express");
const Produit = require("../models/produits.model");

const router = express.Router();

const produits = [
  { id: "p1", titre: "pc portable", description: "I5", prix: 1750 },
  { id: "p2", titre: "ordinateur portable", description: "I3", prix: 1850 },
  { id: "p3", titre: "smartphone", description: "3Go Ram", prix: 600 },
];

router.get("produits", (req, res) => {
  res.status(200).json(produits);
});

router.get("/produits/:id", (req, res) => {
  id = parseInt(req.params.id);
  let e = produits.find((e) => e.id === id);
  res.status(200).json(e);
});

router.post("/produits", (req, res) => {
  let v = new Produit({
    titre: req.body.titre,
    description: req.body.description,
    prix: req.body.prix,
  });
  v.save().then((newProduct) => {
    console.log(newProduct._id);
  });
});

router.put("/produits/:id", (req, res) => {
  id = parseInt(req.params.id);
  let e = produits.find((e) => e.id === id);
  e.titre = req.body.titre;
  e.description = req.body.description;
  e.prix = req.body.prix;
  res.status(200).json(e);
});

router.delete("/produits/:id", (req, res) => {
  id = parseInt(req.params.id);
  produit = produits.find((e) => e.id === id);
  produits.splice(produits.indexOf(produit), 1);
  res.status(200).json(produits);
});

module.exports = router;
