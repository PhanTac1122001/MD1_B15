let n=prompt("Mời bạn nhập mảng số:")
let b=n.split(" ");
let arr=[];

let count=0;

for(let i=0;i<b.length;i++){
   
    if(b[i]<0){
        arr.push(+b[i]);
        count++;
    }
   
}

console.log(`Số nguyên âm trong chuỗi là ${arr}`);