// dates & times
const before = new Date('March 1 2020 12:30:59');
const now = new Date();

const diff = now.getTime() - before.getTime();
console.log(diff);

const secs = Math.round(diff / 1000);
const mins = Math.round(secs / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log(days, hours, mins, secs);

console.log(`the blog was written ${days} ago`);

// converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));