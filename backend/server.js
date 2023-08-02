// index.js
import express from "express";
import Products from "./data/products.js";

// Change the import statement in server.js
//const products = require("./data/products");

//const express = require("express");
//const path = require("path");
//const cors = require("cors");
const app = express();
//app.use(cors());
const port = process.env.PORT || 5000;

app.get("/api/products", (req, res) => {
  res.json(Products);
});

app.get("/api/products/:id", (req, res) => {
  const product = Products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
