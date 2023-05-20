"use strict"
function next_bigger(num){
   let str = num + '';
   let middle = 0;
   let nextNumber = 0;
   let isHasBigger = false;
   let rightPart = [];
   for(let i = str.length - 1; i > 0; i--){
      if(str[i] > str[i-1]){
         middle = str[i-1];
         rightPart.push(str[i]);
         isHasBigger = true;
         nextNumber = str.slice(0,i-1);
         for(let j = 0; j < rightPart.length; j++){
            if(rightPart[j] > middle){
               let temp = middle; 
               middle = rightPart[j];
               rightPart[j] = temp;
               break;
            }
         }
         rightPart.sort((a,b) => a-b);
         nextNumber += middle;
         for(let element of rightPart){
            nextNumber +=element;
         }
         break;
      }else{
         rightPart.push(str[i]);
      }
   }
   if(!isHasBigger){
      return -1;
   }
   return Number(nextNumber);
}