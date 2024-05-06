let n= prompt("Mời nhập mạng vs 10 số nguyên")
let s = n.split(" ")
let sum =0;
let arr=[]

for(let i=0;i<s.length;i++){
    arr.push(+s[i]);
    sum += arr[i];
}



let max=Math.max(...arr);
  let trungbinh= sum/arr.length;

  console.log(`Max là ${max} và giá trị trung bình ${trungbinh}`);
 
