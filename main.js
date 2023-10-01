const buttonLocal = document.querySelector(".mode1");
const buttonOnligne = document.querySelector(".mode2");
let urlToChange = window.location.href

buttonLocal.addEventListener("click", () => {
 let replaceUrlmode1 = urlToChange.replace(/\?.*/,'')
 location.href =  replaceUrlmode1.replace(/index.html/i, "modegame.html")
})

buttonOnligne.addEventListener("click", () => {
 let replaceUrlmode2 = urlToChange.replace(/\?.*/,'')
 location.href = replaceUrlmode2.replace(/index.html/i, "onlineMode.html")
})

const url = "http://localhost:3000/"
 fetch(url)
.then(data=>data.text())
.then(res=>{console.log(res)})