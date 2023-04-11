function addnewlist(text){
    let creatlistitem = document.createElement("li")

    creatlistitem.textContent = text

    let Ul = document.getElementById("unorderlist")

    Ul.appendChild(creatlistitem)



}
addnewlist("heloo this is ghous")