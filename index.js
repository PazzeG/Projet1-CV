let on = 1;
let fondMid = document.querySelector('.central-box');
let fondFoot = document.querySelector('.foot-box');
document.querySelector('.burgerMenu').addEventListener('click', function(e){
    const icones = document.querySelectorAll('.indexNav');
    if(on == 1){
        for(let i = 0; i < icones.length; i++){
            let change = icones[i];
            change.style.display = "block";
        }
        fondMid.style.opacity = "0%";
        fondFoot.style.opacity = "0%";
        on = 0;
    }
    else {
        for(let i = 0; i < icones.length; i++){
            let change = icones[i];
            change.style.display = "none";
        }
        fondMid.style.opacity = "100%";
        fondFoot.style.opacity = "100%";
        on = 1;
    }  
});

const menuBtn= document.querySelector(".burgerMenu");
let menuOpen= false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen= true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen= false;
  }
});