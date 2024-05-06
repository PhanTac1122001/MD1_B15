let a= prompt("Mời nhập mảng số:")
let b= a.split(" ")
let arr =[];
for(let i=0;i<b.length;i++){
    arr.push(+b[i])

}
let c=+prompt("Mời kiểm tra số trong mảng:")
let d = arr.findIndex((element,index)=>element===c)
if(d===-1){
    console.log("Ko thấy số trong mảng");
}else{
    arr.splice(d,1)
}
console.log(arr);