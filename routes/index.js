var express = require("express");
var router = express.Router();

// function to calculate fibonacci number
function fibonacci(n) {
    if (typeof n !== "number") return "Please enter a number";
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

/* GET home page. */
router.get("/", function (req, res, next) {
    res.render("index", { time: new Date().toISOString() });
});

router.post("/", function (req, res, next) {
    const start = Date.now();
    const ans = fibonacci(Number(req.body.num));
    const end = Date.now();
    const duration = end - start;
    res.render("index", {
        time: new Date().toISOString(),
        fib: ans,
        duration: duration,
    });
});

module.exports = router;
