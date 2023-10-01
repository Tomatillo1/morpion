const buttonPlayGame = document.querySelector(".play");
const buttonReturnOnline = document.querySelector(".returnOnline");
buttonPlayGame.addEventListener("click",()=>{
    let player1 = document.getElementById("firstname1").value
    let defineUrl = window.location.href
    let finalUrl = defineUrl.replace(/onlineMode.html/i, "jeuenligne.html")

    let theUrl = new URL(finalUrl)
    let parameters = theUrl.searchParams
    parameters.set("name1", player1)
    theUrl.search = parameters.toString()
    let newUrl = theUrl.toString()
    if  (player1 === "") {
        alert("Le joueur n'a pas été défini")
    } else {
        location.href = newUrl
    }
});

buttonReturnOnline.addEventListener("click", () => {
    history.back()
})