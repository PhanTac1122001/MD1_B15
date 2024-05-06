let n=prompt("Mời nhập một mảng")
let s= n.split(" ");
let arr=[];
for(let i=0;i<s.length;i++){
    arr.push(+s[i]);
    
}
let max=Math.max(...arr);
console.log(arr);
console.log(`số lớn nhất là ${max} và vị trí ${arr.indexOf(max)+1}`);