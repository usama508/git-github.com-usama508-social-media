import connect from "../../lib/mongodb";
import User from '../../models/schema'
var CryptoJS = require("crypto-js");
connect()

export default async function handler(req,res){
    try {
        const {email} = req.body;
        const user = await User.create({email,password: CryptoJS.AES.encrypt(req.body.password,"secret123").toString()});
        res.redirect('/login')
        if(!user){
            return res.json({code:'User not created'})
        }
    } catch (error) {
        res.status(400).json({status:'Not able to create a new user.'})
    }
}