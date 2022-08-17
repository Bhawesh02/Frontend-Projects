const form = document.querySelector(".form");
const pop_up = document.getElementById("popup");

function createCookie(name,value,minutes) {
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime()+(minutes*60*1000));
        var expires = "; expires="+date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name+"="+value+expires+"; path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

let poup = getCookie("home-popup");
if (poup != "submited") {
    pop_up.style.display="block";
} else {
    pop_up.style.display="none";
}

form.addEventListener("submit",()=>{
    pop_up.style.display="none";
    createCookie("home-popup","submited",60);
});