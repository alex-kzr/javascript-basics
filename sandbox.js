let people = ['mario', 'luigi', 'ryu', 'alex', 'chun-li'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}

people.forEach((person, index) => {
    console.log(index, person);
});

people.forEach(logPerson);