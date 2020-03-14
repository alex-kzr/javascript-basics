// sorting strings
const names = ['mario', 'alex', 'chun-li', 'yoshi', 'luigi'];
const sortedNames = names.sort();
console.log(sortedNames);

names.sort();
console.log(names);

names.reverse();
console.log(names);

// sorting numbers
const points = [10, 5, 0, 40, 60, 10, 20, 70];
const stringSortedPoints = [...points]; 
stringSortedPoints.sort();
console.log(stringSortedPoints);

stringSortedPoints.reverse();
console.log(stringSortedPoints);

const numberSortedPoints = [...points];
numberSortedPoints.sort((a,b) => b - a); // descending sorting
numberSortedPoints.sort((a,b) => a - b); // ascending sorting
console.log(numberSortedPoints); 

const firstHighPoint = points.find(score => score > 50);

console.log(firstHighPoint);

const players = [
    {player: 'mario', score: 20},
    {player: 'yoshi', score: 10},
    {player: 'luigi', score: 50},
    {player: 'crystal', score: 30},
    {player: 'alex', score: 70}
]

const descPlayers = [...players];
// descPlayers.sort((a, b) => {
//     if(a.score > b.score){
//         return -1;
//     }else if(b.score > a.score){
//         return 1;
//     }else{
//         return 0;
//     }
// }); 

descPlayers.sort((a,b) => b.score - a.score); // descending sorting

console.log(descPlayers, players);

const ascPlayers = [...players];
ascPlayers.sort((a, b) => a.score - b.score); // ascending sorting

console.log(ascPlayers, players);