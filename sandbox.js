let age = 30;

if(true){
    let age = 40;
    let name = 'alex';
    console.log('inside 1s code block: ', age, name);

    if(true){
        let age = 50;
        console.log('inside 2nd code block: ', age, name);
        var msg = 'hello';
    }
}

console.log('outside code block: ', age, name, msg);