    let n =prompt("Mời nhập mảng số:")
    let b=n.split(" ");
    let arr =[];
    
  
    for(let i=0;i<b.length;i++){
        arr.push(+b[i])
        
    }
    let c= +prompt("Nhập số cần tìm trong mảng:")
    let d= arr.find((element,index)=> element===c)
    if(d===undefined){
        console.log(`Number ${c} is not in the array`);
    }else{
        console.log(`Number ${c} is in the array`);
    }