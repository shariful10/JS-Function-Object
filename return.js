function add (num1, num2){
    console.log(num1, num2);
    var sum = num1 + num2;
    return sum;
}

var total = add(80, 20);
// console.log('total', total);

function bringSingara(money) {
    var singaraPrice = 10;
    var quantity = money / singaraPrice;
    return quantity;
}

var myTaka = 150
var singaras = bringSingara(myTaka);
console.log('Eating Singaras:', singaras);