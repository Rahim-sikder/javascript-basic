// for (var i=0; i<= 20; i++){
//    console.log(i);
//    if(i > 100){
//       break;
//    }

// } 

var items =['bottol', 'pen', 'paper','mouse','sunglass'];
for(var i=0; i < items.length; i++){
   var alItems = items[i];
   if(alItems == 'paper'){
      break;
   }
   console.log(alItems);
}