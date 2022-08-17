const card1=document.getElementById("card-1");
const card2=document.getElementById("card-2");
const card3=document.getElementById("card-3");
const d_menu1=document.getElementById("d-menu-1");
const d_menu2=document.getElementById("d-menu-2");
const d_menu3=document.getElementById("d-menu-3");

card1.addEventListener("click", () => {
    var show1 = d_menu1.getAttribute("show");
    var show2 = d_menu2.getAttribute("show");
    var show3 = d_menu3.getAttribute("show");
    if (show1 == "false")
    {
        d_menu1.setAttribute("show", true);
        d_menu2.setAttribute("show",false);
        d_menu3.setAttribute("show",false);
    }
    else 
    {
        d_menu1.setAttribute("show",false);
        d_menu2.setAttribute("show",false);
        d_menu3.setAttribute("show",false);
    }
});
card2.addEventListener("click", () => {
    var show1 = d_menu1.getAttribute("show");
    var show2 = d_menu2.getAttribute("show");
    var show3 = d_menu3.getAttribute("show");
    if (show2 == "false")
    {
        d_menu1.setAttribute("show",false);
        d_menu2.setAttribute("show",true);
        d_menu3.setAttribute("show",false);

    }
    else if(show2 =="true")
    {
        d_menu1.setAttribute("show",false);
        d_menu2.setAttribute("show",false);
        d_menu3.setAttribute("show",false);
    }
});
card3.addEventListener("click", () => {
    var show1 = d_menu1.getAttribute("show");
    var show2 = d_menu2.getAttribute("show");
    var show3 = d_menu3.getAttribute("show");
    if (show3 == "false")
    {
        d_menu1.setAttribute("show",false);
        d_menu2.setAttribute("show",false);
        d_menu3.setAttribute("show",true);
    }
    else 
    {
        d_menu1.setAttribute("show",false);
        d_menu2.setAttribute("show",false);
        d_menu3.setAttribute("show",false);
    }
});