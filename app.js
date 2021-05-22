const express=require("express");
const crypto=require("crypto");
const app=express();
let iv=crypto.randomBytes(16);
//const password="password";
let key="12345678123456781234567812345678";                       // Hardcoded key , use sha-256 
const secret_message=":)";                                        //secret message to be encrypted and decrypted
crypto.randomBytes(16,function(err,buf){
  //console.log the randombytes
});
let cipher=crypto.createCipheriv("aes-256-cbc",key,iv);
let encrypted=cipher.update(secret_message,"utf-8","hex");        //encrypting from utf-8 to hex format
encrypted+= cipher.final("hex");
console.log("encrypted:"+encrypted);

let decipher=crypto.createDecipheriv("aes-256-cbc",key,iv);
let decrypted=decipher.update(encrypted,"hex","utf-8");           //decrypting from hex to utf-8 format
decrypted+=decipher.final("utf-8");

console.log("decrypted:"+decrypted);

app.listen("3000",function(req,res){
  console.log("Server is up at 3000");
});
