"use strict"

function ipAdress(num){
   let binary = (num >>> 0).toString(2);
   binary = ''.padStart(32 - binary.length, '0') + binary;
   let binaryIP = '';
   for(let i = 0; i < binary.length; i++){
      binaryIP += binary[i];
      if(i % 8 == 7 && i !== binary.length - 1){
         binaryIP += '.';
      }
      
   }
   let adresses = binaryIP.split('.');
   binaryIP = '';
   for(let adress of adresses){
      binaryIP += parseInt(adress, 2) + '.';
   }
   binaryIP = binaryIP.slice(0,binaryIP.length - 1);
   return binaryIP;
}