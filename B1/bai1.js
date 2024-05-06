let n= prompt("Mời nhập mạng vs 10 số nguyên")
let s = n.split(" ")

let arr=[]



let count= 0;
for(let i=0;i<s.length;i++){
    arr.push(+s[i]);
    if(arr[i]>=10){
        count++
    }
   
}
console.log(arr);
console.log(`Có ${count} số nguyên lớn hơn hoặc bằng 10`);

