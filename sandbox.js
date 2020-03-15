const clock = document.querySelector('.clock');

const addPrependigZero = number =>{
    if(number >= 0 && number <= 9){
        return ("0" + number).slice(-2);;
    }else{
        return number;
    }
}

const tick = () => {
    const now = new Date();

    const h = addPrependigZero(now.getHours());
    const m = addPrependigZero(now.getMinutes());
    const s = addPrependigZero(now.getSeconds());

    html = `
        <span>${h}</span> : 
        <span>${m}</span> : 
        <span>${s}</span>
    `;

    clock.innerHTML = html;
};

setInterval(tick, 1000);