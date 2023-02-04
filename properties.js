var shopingCard = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
// When you know the property name, use dot notation to get the property value
var penCount = shopingCard.pen;
// Alternative system
// When you know the property name, use dot notation to get the property value
var penCount2 = shopingCard['pen'];

var propertyName = 'mouse';
var provertyValue = shopingCard[propertyName];
// console.log(propertyName, provertyValue);

var propertyValues = Object.values(shopingCard);
var properties = Object.keys(shopingCard);
// console.log(properties);
// console.log(propertyValues);
console.log(shopingCard);

// Set property values
shopingCard.mouse = 15; // System no 1
console.log(shopingCard);
shopingCard['mouse'] = 29; // System no 2
console.log(shopingCard);
shopingCard[propertyName] = 90; // System no 3
console.log(shopingCard);