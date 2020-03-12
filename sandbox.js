const speak = function(){
    console.log('good day!');
};

speak(); // can't call before declaration

greet();

function greet(){
    console.log('hello there!');
}