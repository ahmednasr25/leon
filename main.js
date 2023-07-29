let up = document.querySelector(".up") 
console.log(up)

window.onscroll = function (){
    this.scrollY >= 1000 ? up.classList.add("show") : up.classList.remove("show")
}

up.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}