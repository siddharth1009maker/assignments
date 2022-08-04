var express = require("express");
var router = express.Router();
const stripe = require("stripe")("pk_test_51KNb37SDyanzXER2Mzk1QGVgqA2dOzSklARE2aBmkhEI5DVps8ZQG1DYGkI4C1RWAEmPNGgmuFkJZFjpM9wBeZ3j0034ZFE4Jb");

router.get("/",(req,res)=>{
    res.render('index',{title:"Stripe Checkout Example"});
});

router.post('/create-checkout-session',async function(req,res,next){
    try  {
        const session = await stripe.checkout.sessions.create({
            line_items:[
                {
                    price : 'price_1KEoG2SHKFpjeywqDvm3EbiI',
                    quantity : req.body.quantity,
                },
            ],
            mode : 'payment',
            success_url : 'http://localhost:4900/success.html?id={CHECKOUT_SESSION_ID}',
            cancel_url : 'http://localhost:4900/cancel.html',
        })
        res.send({id:session.id});
    }catch(e){
        throw new Error(e);
    }
});

module.exports = router;