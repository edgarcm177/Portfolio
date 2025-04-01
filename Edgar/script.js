//alert("javascript is linked!");

var vam= document.getElementById("Nav");
var menu= document.getElementById("showme");
function aria(){
    
    /*var x= vam.getAttribute("aria-hidden");
    var y=menu.getAttribute("aria-expanded");
    console.log("in function");
    if(y =="false"){
        console.log("in if statement");
        x = "false";
        y = "true";
    }else{
        x="true";
        y="false";
    }*/
   vam.setAttribute("aria-hidden", "false");
    menu.setAttribute("aria-expanded", "true");
    
}

function aria2(){
    vam.setAttribute("aria-hidden", "true");
    menu.setAttribute("aria-expanded", "false");
}
    
vam.addEventListener('mouseout', aria2);
vam.addEventListener('mouseover', aria);
vam.addEventListener('focusin', aria);
vam.addEventListener('focusout', aria2)
menu.addEventListener('mouseover', aria);
menu.addEventListener('mouseout', aria2);
menu.addEventListener('focusin', aria);
menu.addEventListener('focusout', aria2);

/*function showmenu(){
    console.log("in the function");
   var vam = document.getElementById("Nav");
    if(vam.classList.contains('navclose')){
    console.log("in the if statement");
        vam.classList.remove('navclose');
    vam.classList.add('navshow');
} /*else{
    console.log("in the else statement");
    vam.classList.remove('navshow');
    vam.classList.add('navclose');
}
}
menu.addEventListener('mouseover', showmenu);*/
var bttn=document.getElementById("Ani");
function Animation(){
    var get=document.getElementById("balls")
    if(get.classList.contains("Noball")){
        get.classList.add("ball");
        get.classList.remove("Noball");
        bttn.textContent="Stop Animation";
       }
    else{
        bttn.textContent="Start Animation"
        get.classList.remove("ball");
        get.classList.add("Noball");
    }  
    }

bttn.addEventListener ("click", Animation);

var Roll=document.getElementById("Dice");
function DiceRoll(){
    
var TypeD=document.getElementById("Type").value;
     var x=Math.floor(Math.random()*(TypeD)+1);
    var y=Math.floor(Math.random()*(TypeD)+1);
    var paragraph=document.getElementById("DiceOutcome");
    var paragraph2=document.getElementById("DiceTotal");
paragraph.textContent="You rolled a "+x+" and "+y+".";
paragraph2.textContent="Your total is "+(x+y);
}
Roll.addEventListener("click", DiceRoll);