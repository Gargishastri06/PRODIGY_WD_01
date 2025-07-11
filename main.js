const nav =document.getElementById("navbar")
function nav_color_change (){
    if(window.scrollY>20){
        nav.style.backgroundColor="pink"
    }
    else{
        nav.style.backgroundColor="white"
    }

}

window.addEventListener('scroll',nav_color_change)