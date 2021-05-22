# aes-256-Encryption-Decryption using Node.js/Express
 Used aes-256 algorithm from crypto package for encryption and decryption using Node.js

## Install crypto package from npm -
npm i crypto

## Cipheriv and Decipheriv function -
Used Cipheriv and Decipheriv functions for Encryption and Decryption.
Syntax - crypto.cipheriv("algorithm","key","iv")
         decipheriv("algorithm","key","iv")
         
These functions require the same key and iv values for correct encryption and decryption.

I used a hardcoded 256-bit key value in code . We can also create this key using sha-256 algorithm.
For increasing the complexity of encrytion and decryption we use  the iv value which is a 16 bit number .

### In the code we created iv value  randomly using -
crypto.randomBytes(16)

Haven't created any frontend for this , results will  be in the log of he terminal.


Hope this will help the readers !!!

