let n=prompt("Mời bạn nhập mảng số:")
let b=n.split(" ");

let arr=[];
for(let i=0;i<b.length;i++){
    arr.push(+b[i]);
    
}
arr.reverse();
console.log(arr);