const buttonPlay = document.querySelector(".play");
const buttonReturnLocal = document.querySelector(".returnLocal");

buttonPlay.addEventListener("click", ()=>{
    let player1 = document.getElementById("firstname1").value
    let player2 = document.getElementById("firstname2").value
    let lastUrl = window.location.href
    let finalUrl = lastUrl.replace(/modegame.html/i, "jeu.html")

    let url = new URL(finalUrl)
    let parameters = url.searchParams
    parameters.set("name1", player1)
    parameters.set("name2", player2)
    url.search = parameters.toString()
    let newUrl = url.toString()
    if (player1 === "" && player2 === "") {
        alert("Aucun joueur n'a été défini")
    } else if (player1 === ""){
        alert("Le joueur 1 n'a pas été défini")
    } else if (player2 === ""){
        alert("Le joueur 2 n'a pas été défini")
    } else {
        location.href = newUrl
    }
});

buttonReturnLocal.addEventListener("click", () => {
    history.back()
})