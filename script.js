//menu-bar 
var menu=document.getElementById("menu");
var menuBox=document.getElementById("menu-bar");
var cross=document.querySelector(".cross");
var menutick=false;
function crossBar(){
    menuBox.style.display="none";
    menutick=false;
}
function menuBar(){
    if(menutick==false){
        menuBox.style.display="flex";
        menutick=true;
    }
    else{
        menuBox.style.display="none";
        menutick=false;
    }
}
function menuBarClose(){
    menuBox.style.display="none";
    menutick=false;
}