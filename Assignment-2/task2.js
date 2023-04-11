let fruits = ["oranges","apples","grapes","guava","pomogranade"]

let arrlength = fruits.length
function recursive(array,val){
    if(arrlength===0){
        return false
    }
    else if(array[0]===val){
        return true

    }
    return searchArray(array.slice(1), val);

}


recursive(fruits,"grapes")


