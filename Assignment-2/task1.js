const addnum = (num)=>{
    return function(){
return num + 5
    }
}

closure = addnum(5)
callfunc = closure()
console.log(callfunc);


