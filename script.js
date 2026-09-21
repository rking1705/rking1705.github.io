const btn=document.getElementById("menuBtn"),menu=document.getElementById("menu");
const themeBtn=document.getElementById("themeBtn");
const saved=localStorage.getItem("theme");
if(saved==="dark")document.documentElement.dataset.theme="dark";
function icon(){themeBtn.textContent=document.documentElement.dataset.theme==="dark"?"☼":"◐"}
icon();
themeBtn.addEventListener("click",()=>{const dark=document.documentElement.dataset.theme==="dark";if(dark)delete document.documentElement.dataset.theme;else document.documentElement.dataset.theme="dark";localStorage.setItem("theme",dark?"light":"dark");icon()});
btn.addEventListener("click",()=>{const open=menu.classList.toggle("open");btn.setAttribute("aria-expanded",open);btn.querySelector("b").textContent=open?"×":"+"});
document.querySelectorAll(".menu a").forEach(a=>a.addEventListener("click",()=>{menu.classList.remove("open");btn.querySelector("b").textContent="+";}));