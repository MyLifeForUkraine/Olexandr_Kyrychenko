"use strict"

function digital_sum(num){
   let sum = 0;
   while(sum >= 10 || num > 0){
      sum += num%10;
      num = Math.floor(num/10)
      if(num === 0 && sum >= 10){
         num = sum; 
         sum = 0;
      }
   }
   return sum;
}