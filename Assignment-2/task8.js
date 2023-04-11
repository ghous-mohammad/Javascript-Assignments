function objsendingkeyandval(obj) { 

    for (const key in obj){
        let send =localStorage.setItem(`${key}`,`${obj[key]}`)
        JSON.stringify(send)
    }


    keys = Object.keys(obj)
   
    console.log(keys.length)
    for(i=0;i<keys.length;i++){

        // console.log(keys);
        let retkey= keys[i]
        console.log(retkey);
        let retrieve = localStorage.getItem(retkey)
         JSON.parse(retrieve)
        console.log(retrieve);
    }


}
objsendingkeyandval({name:"hello",class:76})