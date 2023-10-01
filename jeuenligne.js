const parameter = new URLSearchParams(document.location.search);
const name1 = parameter.get("name1");
document.querySelector(".name1").innerHTML = name1;
const changeColor = document.querySelector(".changeColor");
changeColor.innerHTML = name1;
const returnButton = document.querySelector(".return");

returnButton.addEventListener("click", () => {
    history.back()
})