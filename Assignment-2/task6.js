function Savetolocalstorage(key,obj){
    let convert = JSON.stringify(obj)
    localStorage.setItem(key,convert)
}
Savetolocalstorage("student",{name:"ghous",roll:87})