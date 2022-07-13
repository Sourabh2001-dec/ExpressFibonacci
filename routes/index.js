var express = require("express");
var router = express.Router();
const { exec } = require("child_process");

const products = require("../products.json");

function cpuStress() {
    // run stress shell command using node js
    // Gives cpu load upto 60%
    // console.log(`stress -c ${process.env.stressC} -t ${process.env.stressS}s`)
    exec(`stress -c ${process.env.stressC} -t ${process.env.stressS}s`, (err, stdout, stderr) => {
        if (err) {
            console.error(err);
            return;
        }
        // console.log(stdout);
    });
}

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { products: products });
    cpuStress();
});

router.get("/products/:id", function (req, res, next) {
    const id = +req.params.id;
    const product = products.find((product) => product.id === id);
    res.render("product", { product: product });
});

module.exports = router;
