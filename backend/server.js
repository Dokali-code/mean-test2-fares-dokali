const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");
const routeProduits = require("./routes/produits");
const mongoose= require('mongoose')

mongoose.connect('mongodb+srv://Dokali:ChOVt3kvmL8YI8Jk@cluster0.kywgi.mongodb.net/Produits?retryWrites=true&w=majority')
    .then(() => {
        console.log('Connection reussie !')
    })
    .catch((err) => {
        console.log('Problème de connection')
    })
app.use(cors());
app.use(express.json());

app.use("/api", routeProduits);

app.use(express.static(path.join(__dirname)));
app.listen(4000, () => {
  console.log("Server Listening on port 4000...");
});
