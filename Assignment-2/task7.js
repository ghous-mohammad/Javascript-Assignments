let student;
function userinput(){
   std= {
        name: prompt("type your name"),
        class: +prompt("type your class in muber form"),
        schoolname: prompt("type your school name"),
        roll: +prompt("type your roll number"),
        hobby: prompt("type your hobby")
    }
student = std
}


function senddatatolocalstorage(key,data){
    let dataconversion = JSON.stringify(data)
    localStorage.setItem(key,dataconversion)

    // 

}
userinput()
senddatatolocalstorage("student",student)


function extractingdatafromlocalstorage (key) {
    
    
    let ext = localStorage.getItem(key) 
    let extracteddata = JSON.parse(ext)
    return extracteddata
   
   

 }
console.log(extractingdatafromlocalstorage("student"));