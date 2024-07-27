
import product from "../schema/productSchema";
import account from '../schema/accountSchema';
import order from '../schema/orderSchema';
const mongoose = require('mongoose');
const puppeteer = require('puppeteer');


export async function POST(req) {
    let param = await req.json()
    let collection = param.collection
    let find = param.find
    let remove = param.remove
    let update = param.update
    let create = param.create


    await mongoose.connect(process.env.MONGO_URI)
    let collectionModel;

    if (collection=="accounts"){
        collectionModel = account
    }else if(collection=="products"){
        collectionModel = product
    }else if(collection=="orders"){
        collectionModel = order
    }

    let res ;

    if (find){
        let key = find.key
        let value = find.value
        res = await collectionModel.find({[key]:value})  
    }else if (create){
        let data = create.data
        res = await collectionModel.create(data)
    }else if (remove){
        let key = remove.key
        let value = remove.value
        res = await collectionModel.deleteOne({[key]:value})
    }else if (update){
        let key = update.key
        let oldvalue = update.oldvalue
        let newvalue = update.newvalue
        res = await collectionModel.findOneAndUpdate({[key]:oldvalue},{[key]:newvalue})
    }else{
        res = await collectionModel.find({})
    }


    return new Response(JSON.stringify(res))
}
