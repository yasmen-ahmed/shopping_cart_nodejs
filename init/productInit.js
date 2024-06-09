const product =require('../models/product');


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoppinng-cart', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to db');
});


const products = [
    new product({
        name: 'test product',
        price: 100,
        info: {
            StorageCapacity:180,
            RAM: 12,
            ScreenSize: 1600,
            OperatingSystem: "ios"
        },
        image: '/images/gallery.jpg'
    }),
    new product({
        name: 'test product',
        price: 100,
        info: {
            StorageCapacity:180,
            RAM: 12,
            ScreenSize: 1600,
            OperatingSystem: "ios"
        },
        image: '/images/gallery.jpg'
    }),
    new product({
        name: 'test product',
        price: 100,
        info: {
            StorageCapacity:180,
            RAM: 12,
            ScreenSize: 1600,
            OperatingSystem: "ios"
        },
        image: '/images/gallery.jpg'
    })
] 


var done = 0

for(var i=0 ; i<products.length;i++ ){
//    console.log(i)
    try {
        products[i].save();
         console.log(products[i]);
         if(done === products.length){
            mongoose.disconnect();
         }
         done++;
        
       } catch (err) {
         console.log(err);
        
       }
}

