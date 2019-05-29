function showHamburger(event){
    let menu = document.querySelector("nav")
    menu.classList.toggle("navhidden")
}

function showCategories(event){
    let menu = document.querySelector(".navearth")
    menu.classList.toggle("earthhide")
    let cat = document.querySelector(".categories")
    cat.classList.toggle("showcat")
    // let elem = document.querySelector("")
}


function showContact(event){
    let menu = document.querySelector(".contact")
    menu.classList.toggle("hidecontact")
    let cat = document.querySelector(".contact2")
    cat.classList.toggle("showcontact2")
}