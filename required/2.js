"use strict"

function first_non_repeating_letter(str){
   let strCopy = str;
   str = str.toLowerCase();
   for(let i = 0; i < str.length; i++){
      if(str.split(str[i]).length === 2){
         return strCopy[i];
      }
   }
   return '';
}

