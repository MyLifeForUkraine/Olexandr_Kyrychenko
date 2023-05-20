"use strict"

function count_of_pairs(arr, target){
   let count = 0;
   let sortArray = arr.sort((a,b) => a-b);
   for(let i = 0; i <= sortArray.length; i++){
      for(let j = i + 1; j < sortArray.length; j++){
         if(sortArray[i] + sortArray[j] === target){
            count++;
         }else if(sortArray[i] + sortArray[j] > target){
            break;
         }
      }
   }
   return count;
}
