import connect from '../../lib/mongodb'
import User from '../../models/schema'
var CryptoJS = require("crypto-js");
var jwt = require('jsonwebtoken');
connect()

export default async function handler(req,res){

    const {email}=req.body
    const user = await User.findOne({email})
    const bytes = CryptoJS.AES.decrypt(user.password, 'secret123')
    let decryptedPass = bytes.toString(CryptoJS.enc.Utf8)
    if(user){
        if(req.body.email == user.email && req.body.password == decryptedPass){
            var token = jwt.sign({ email:user.email }, 'jwtsecret',{
                expiresIn:'2d'
            });
            res.json({success:true ,token})
            return res.redirect('/')
            
        }
        else{
            return res.json({success:false,email:"invalid"})
        }
        
        
    }else{
            return res.json({success:false,error:"No user found"})
        }
    
}