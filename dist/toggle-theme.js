let primaryColorScheme="",currentTheme=localStorage.getItem("theme");function getPreferTheme(){return currentTheme||(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}let themeValue=getPreferTheme();function setPreference(){localStorage.setItem("theme",themeValue),reflectPreference()}function reflectPreference(){document.firstElementChild.setAttribute("data-theme",themeValue),document.querySelector("#theme-btn")?.setAttribute("aria-label",themeValue);let e=document.body;if(e){let t=window.getComputedStyle(e).backgroundColor;document.querySelector("meta[name='theme-color']")?.setAttribute("content",t)}}reflectPreference(),window.onload=()=>{function e(){reflectPreference(),document.querySelector("#theme-btn")?.addEventListener("click",()=>{themeValue="light"===themeValue?"dark":"light",setPreference()})}e(),document.addEventListener("astro:after-swap",e)},window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",({matches:e})=>{themeValue=e?"dark":"light",setPreference()});