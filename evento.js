document.addEventListener('DOMContentLoaded', function(){
    
    var nav = document.getElementById("nav");
    // var current_pos = nav.offsetTop;
    // console.log(current_pos)
    window.onscroll = function(){
        var window_pos = document.documentElement.scrollTop;
        if(window_pos>=200){
            nav.classList.add("color-nav");
        }
        else{
            nav.classList.remove("color-nav");
        }
    }
} )

