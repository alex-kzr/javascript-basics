// template strings
const title = 'Best reads 2020';
const author = 'Mario';
const likes = 30;

//concatenation way
let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes.'

// template string way
result = `The blog calles ${title} by ${author} has ${likes} likes!`;

// creating html templates
let html = `
    <h2>${title}</h2>
    <p>By ${author}</p>
    <span>This blog has ${likes}</span>
`;

console.log(result);
console.log(html);