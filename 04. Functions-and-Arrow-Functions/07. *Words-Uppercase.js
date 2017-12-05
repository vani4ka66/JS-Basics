function main(str) {

let regex=/[, ?!:.;\-#$-+]+/g;

let arr=str.split(regex);

arr=arr.filter(x=>x!=='');

console.log(arr.join(', ').toUpperCase());
}
