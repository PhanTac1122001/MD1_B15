let a = prompt("Mời nhập mảng:")
let b = a.split("");
let arr = [];
let count = 0;
for (i = 0; i < b.length; i++) {
    if (b[i] > 0) {
        arr.push(+b[i])
        count++;
    }
    
}
console.log(`các kí tự số là ${arr}`);