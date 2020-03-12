// regular function
const calcArea = function(radius){
    return 3.14 * radius**2;    
};

// arrow function
const calcVol = (area, height) => {
    return area * height;
};
console.log(calcVol(calcArea(5), 5));

const greet = name => `Hello ${name}`;
console.log(greet('alex'));

const bill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
}
console.log(bill([10,15,30], 0.2));