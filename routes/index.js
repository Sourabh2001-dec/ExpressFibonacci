var express = require("express");
var router = express.Router();

const products = require("../products.json");

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { products: products });
});

router.get("/products/:id", function (req, res, next) {
    const id = +req.params.id;
    const product = products.find((product) => product.id === id);
    res.render("product", { product: product });
});

module.exports = router;
