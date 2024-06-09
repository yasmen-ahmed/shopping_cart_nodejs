const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    info: {
        type: {
            StorageCapacity:Number,
            RAM: Number,
            ScreenSize: Number,
            OperatingSystem: String

        },
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema)