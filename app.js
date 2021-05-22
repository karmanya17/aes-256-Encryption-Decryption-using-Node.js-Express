const express=require("express");
const crypto=require("crypto");
const app=express();
let iv=crypto.randomBytes(16);
const password="password";
let key="12345678123456781234567812345678";
const secret_message=":)";
crypto.randomBytes(16,function(err,buf){

});
let cipher=crypto.createCipheriv("aes-256-cbc",key,iv);
let encrypted=cipher.update(message,"utf-8","hex");
encrypted+= cipher.final("hex");
console.log("encrypted:"+encrypted);

let decipher=crypto.createDecipheriv("aes-256-cbc",key,iv);
let decrypted=decipher.update(encrypted,"hex","utf-8");
decrypted+=decipher.final("utf-8");

console.log("decrypted:"+decrypted);

app.listen("3000",function(req,res){
  console.log("Server is up at 3000");
});
