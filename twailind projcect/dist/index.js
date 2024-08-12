const menuIcon = document.querySelector('.menu')
const isOrange = true;
menuIcon.addEventListener("click", ()=>{
    document.querySelector('.nav-links').classList.toggle('hidden')
    if(isOrange) {
        menuIcon.style.color = "black";
    }else {
        menuIcon.style.color = "none";
    }
    isOrange = !isOrange;
})