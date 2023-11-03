var shoppingCart= {
   book: 3,
   pen : 25,
   sunglass : 3,
   mouse :1,
}
var penCount = shoppingCart.pen;
var properties = Object.keys(shoppingCart);
var propertiesValue = Object.values (shoppingCart);

var propertyName = 'mouse ';
var propertyValue = shoppingCart [propertyName];
// console.log(propertyName, propertyValue);
// console.log(properties);
// console.log(propertiesValue);
// console.log(penCount);
console.log(shoppingCart);

// property set
 shoppingCart.mouse = 20;
 console.log(shoppingCart);
