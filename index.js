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


const fondText = document.querySelector(".backgroundTitle");
function backgroundText (text){
    console.log(text.classList);
    text.addEventListener('mouseenter', function(e){
        if(text.classList[0] == "diplomes"){
            fondText.innerHTML = "DIPLOMES";
        }
        else if (text.classList[0] == "disponibilite"){
            fondText.innerHTML = "DISPONIBILITE";
        }
        else if (text.classList[0] == "projet"){
            fondText.innerHTML = "PROJET";
        }
        else if (text.classList[0] == "coordonnes"){
            fondText.innerHTML = "COORDONNES";
        }
        else if (text.classList[0] == "competences"){
            fondText.innerHTML = "COMPETENCES";
        }
        else{
            fondText.innerHTML = "EXPERIENCES";
        }
        fondText.style.display = "flex";
        fondText.animate([
            // keyframes
            { opacity: '0%' }, 
            { opacity: '30%' }
          ], { 
            // timing options
            duration: 500,
            iterations: 1,
          });
          fondText.style.opacity = "30%";
        text.style.backgroundColor= "rgba(216, 223, 238, 0.9)";

    })
    text.addEventListener('mouseleave', function(e){
        fondText.animate([
            // keyframes
            { opacity: '30%' }, 
            { opacity: '0%' }
          ], { 
            // timing options
            duration: 500,
            iterations: 1,
          });
        fondText.style.opacity = "0%";
        fondText.style.display = "none"; 
        text.style.background = "";
    })
}

const exp = document.querySelector(".experiences");
const dip = document.querySelector(".diplomes");
const disp = document.querySelector(".disponibilite");
const proj = document.querySelector(".projet");
const coo = document.querySelector(".coordonnes");
const comp = document.querySelector(".competences");
backgroundText(exp);
backgroundText(dip);
backgroundText(disp);
backgroundText(proj);
backgroundText(coo);
backgroundText(comp);


// "#d8dfee";