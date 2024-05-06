let a = prompt("Mời nhập mảng số:")
let b = a.split(" ")
let arr = [];
for (let i = 0; i < b.length; i++) {
    arr.push(+b[i])

}

console.log(arr.sort((a, b) => a - b));
