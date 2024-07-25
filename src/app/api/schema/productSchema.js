const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    image: String,
    link: String,
    category: String,
    subcategory: String,
    price: Number,
    margin: Number,
    description: String
})
mongoose.models = {}
export default mongoose.model("products", productSchema)