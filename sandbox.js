const ul = document.querySelector('.people');

let people = ['mario', 'luigi', 'ryu', 'alex', 'chun-li'];

let html = ``;

people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});

ul.innerHTML = html;