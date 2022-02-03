var Publishable_Key = 'pk_test_51KP26ILCylh8yNb6jHLEsWpAIV7d2o3agYcoWT1CEgSxUnhLDBUTKoStto7k0NhKFfaLloUPMTgUDXM2IONM9dFh00VFnzlvup'
var Secret_Key = 'sk_test_51KP26ILCylh8yNb6OZHIhkkCos6Dfau0t0gOXl3goxxoNwgNfp8i7m3tAUt0ebjfrjYO7nkxiAZORejODJPKm2s100g37gHkgX'
const stripe = require('stripe')(Secret_Key) 

exports.StripePayment=(req,res)=>{ 
    let {stripeEmail,stripeToken,name}=req.body;
    if (!stripeEmail || !stripeToken || !name){
        return res.status(400).json({
            message:"Invalid data ",
        })
    }
    stripe.customers.create({ 
        email:stripeEmail, 
        source:stripeToken, 
        name:name, 
        address: { 
            line1: 'California,USA', 
            postal_code: '110092', 
            city: 'Los Angles', 
            state: 'California', 
            country: 'USA', 
        } 
    }) 
    .then((customer) => { 

        return stripe.charges.create({ 
            amount: 700,    
            description: 'Testing payment', 
            currency: 'usd', 
            customer: customer.id 
        }); 
    }) 
    .then((charge) => { 
        res.status(200).json({
            message:"Sucess in payment transaction",
        });
    }) 
    .catch((err) => { 
        res.send(err) 
        console.log(err.message);   
    }); 
} 

