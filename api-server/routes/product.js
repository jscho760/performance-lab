const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");

// 인증 적용
router.use(auth);

router.get("/", (req, res) => {

    res.json([
        {
            id:1,
            name:"Laptop",
            price:1500
        },
        {
            id:2,
            name:"Monitor",
            price:500
        }
    ]);

});

router.get("/:id",(req,res)=>{

    res.json({
        id:req.params.id,
        name:"Product-"+req.params.id,
        stock:100,
        price:1000
    });

});

module.exports = router;
