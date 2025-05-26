const menu_hamburger=document.getElementById("menu_hamburger");
const close_left_sidebar=document.getElementById("close_left_sidebar");


menu_hamburger.addEventListener("click",()=>{
    document.getElementById("left_sidebar").style.display="block";
});

close_left_sidebar.addEventListener("click",()=>{
    document.getElementById("left_sidebar").style.display="none";
})