const Item = require('../models/items')
const Testo =require('../models/testomonials');

exports.getHome = (req,res,next) => {
    Item.find()
    .then(products => {
      res.send(products)
    })
    .catch(err => {
      console.log(err);
    });
   
};