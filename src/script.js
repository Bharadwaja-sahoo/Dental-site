//menu-bar 
var menu=document.getElementById("menu");
var menuBox=document.getElementById("menu-bar");
var cross=document.querySelector(".cross");
var menutick=false;
function crossBar(){
    // menuBox.style.display="none";
    menuBox.style.transform = "translate(-100%, 0px)";
    menutick=false;
}
function menuBar(){
    if(menutick==false){
        // menuBox.style.display="flex";
        menuBox.style.transform = "translate(0px, 0px)";
        menutick=true;
    }
    else{
        // menuBox.style.display="none";
        menuBox.style.transform = "translate(-100%, 0px)";
        menutick=false;
    }
}
function menuBarClose(){
    // menuBox.style.display="none";
    menuBox.style.transform = "translate(-100%, 0px)";
    menutick=false;
}