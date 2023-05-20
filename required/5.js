"use strict"

function meeting(str){
   let guests = str.split(';');
   for(let i = 0; i < guests.length; i++){
      guests[i] = guests[i].split(':').reverse().join(':').toUpperCase();
   }
   guests.sort();
   let answer = '';
   for(let i = 0; i < guests.length; i++){
      let guest = guests[i].split(':');
      answer += '(' + guest[0] + ', ' + guest[1] + ')';
   }
   return answer;
}
