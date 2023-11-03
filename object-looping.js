var shoppingCart= {
   book: 3,
   pen : 25,
   sunglass : 3,
   mouse :1,
   shoes: 20,
}
const key = Object.keys (shoppingCart);
console.log (key);
const value = Object.values (shoppingCart);
console.log (value);
// using loop
for (i =0; i < key.length ; i++){
   var propertyName = key[i];
   var propertyValue = shoppingCart[propertyName]
   // console.log (propertyName,propertyValue);
}

for (var propertyName in shoppingCart){
   const value = shoppingCart[propertyName];
    console.log (propertyName , value);

}