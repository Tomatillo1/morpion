const params = new URLSearchParams(document.location.search);
const name1 = params.get("name1");
const name2 = params.get("name2");
document.querySelector(".name1").innerHTML = name1;
document.querySelector(".name2").innerHTML = name2;
const changeColor = document.querySelector(".changeColor");
changeColor.innerHTML = name1;
const changeScore1 = document.querySelector(".score1");
const changeScore2 = document.querySelector(".score2");
const buttons = document.querySelectorAll(".block");

buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{
        if (changeColor.innerHTML === name1) {
            button.innerHTML = "X"
            button.style.color = "#E30D00"
            changeColor.innerHTML = name2
            changeColor.classList.add("changeColor2")
            allLines()
        } else if (changeColor.innerHTML === name2) {
            button.innerHTML = "O"
            button.style.color = "#E0BB00"
            changeColor.innerHTML = name1
            changeColor.classList.remove("changeColor2")
            allLines()
        }

    }, {once:true})
})

function allLines () {
    checkLine1()
    checkLine2()
    checkLine3()
    checkLine4()
    checkLine5()
    checkLine6()
    checkLine7()
    checkLine8()
}

function checkLine1 () {
    if (buttons[0].innerHTML === "X") {
        if (buttons[1].innerHTML === "X") {
            if (buttons[2].innerHTML === "X") {
                let newScore1 = Number(changeScore1.innerHTML) + 1
                document.querySelector(".score1").innerHTML = newScore1.toString()
                alert("youpi")
            }
        }
    } else if (buttons[0].innerHTML === "O") {
        if (buttons[1].innerHTML === "O") {
            if (buttons[2].innerHTML === "O") {
                let newScore2 = Number(changeScore2.innerHTML) + 1
                document.querySelector(".score2").innerHTML = newScore2.toString()
                alert("Hourra")
            }
        }
    }
}

function checkLine2 () {
    if (buttons[3].innerHTML === "X") {
        if (buttons[4].innerHTML === "X") {
            if (buttons[5].innerHTML === "X") {
                let newScore1 = Number(changeScore1.innerHTML) + 1
                document.querySelector(".score1").innerHTML = newScore1.toString()
                alert("youpi")
            }
        }
    } else if (buttons[3].innerHTML === "O") {
        if (buttons[4].innerHTML === "O") {
            if (buttons[5].innerHTML === "O") {
                let newScore2 = Number(changeScore2.innerHTML) + 1
                document.querySelector(".score2").innerHTML = newScore2.toString()
                alert("Hourra")
            }
        }
    }
}

function checkLine3 () {
    if (buttons[6].innerHTML === "X") {
        if (buttons[7].innerHTML === "X") {
            if (buttons[8].innerHTML === "X") {
                let newScore1 = Number(changeScore1.innerHTML) + 1
                document.querySelector(".score1").innerHTML = newScore1.toString()
                alert("youpi")
            }
        }
    } else if (buttons[6].innerHTML === "O") {
        if (buttons[7].innerHTML === "O") {
            if (buttons[8].innerHTML === "O") {
                let newScore2 = Number(changeScore2.innerHTML) + 1
                document.querySelector(".score2").innerHTML = newScore2.toString()
                alert("Hourra")
            }
        }
    }
}

function checkLine4 () {
    if (buttons[0].innerHTML === "X") {
        if (buttons[3].innerHTML === "X") {
            if (buttons[6].innerHTML === "X") {
                let newScore1 = Number(changeScore1.innerHTML) + 1
                document.querySelector(".score1").innerHTML = newScore1.toString()
                alert("youpi")
            }
        }
    } else if (buttons[0].innerHTML === "O") {
        if (buttons[3].innerHTML === "O") {
            if (buttons[6].innerHTML === "O") {
                let newScore2 = Number(changeScore2.innerHTML) + 1
                document.querySelector(".score2").innerHTML = newScore2.toString()
                alert("Hourra")
            }
        }
    }
}

function checkLine5 () {
    if (buttons[1].innerHTML === "X") {
        if (buttons[4].innerHTML === "X") {
            if (buttons[7].innerHTML === "X") {
                let newScore1 = Number(changeScore1.innerHTML) + 1
                document.querySelector(".score1").innerHTML = newScore1.toString()
                alert("youpi")
            }
        }
    } else if (buttons[1].innerHTML === "O") {
        if (buttons[4].innerHTML === "O") {
            if (buttons[7].innerHTML === "O") {
                let newScore2 = Number(changeScore2.innerHTML) + 1
                document.querySelector(".score2").innerHTML = newScore2.toString()
                alert("Hourra")
            }
        }
    }
}

function checkLine6 () {
    if (buttons[2].innerHTML === "X") {
        if (buttons[5].innerHTML === "X") {
            if (buttons[8].innerHTML === "X") {
                let newScore1 = Number(changeScore1.innerHTML) + 1
                document.querySelector(".score1").innerHTML = newScore1.toString()
                alert("youpi")
            }
        }
    } else if (buttons[2].innerHTML === "O") {
        if (buttons[5].innerHTML === "O") {
            if (buttons[8].innerHTML === "O") {
                let newScore2 = Number(changeScore2.innerHTML) + 1
                document.querySelector(".score2").innerHTML = newScore2.toString()
                alert("Hourra")
            }
        }
    }
}

function checkLine7 () {
    if (buttons[0].innerHTML === "X") {
        if (buttons[4].innerHTML === "X") {
            if (buttons[8].innerHTML === "X") {
                let newScore1 = Number(changeScore1.innerHTML) + 1
                document.querySelector(".score1").innerHTML = newScore1.toString()
                alert("youpi")
            }
        }
    } else if (buttons[0].innerHTML === "O") {
        if (buttons[4].innerHTML === "O") {
            if (buttons[8].innerHTML === "O") {
                let newScore2 = Number(changeScore2.innerHTML) + 1
                document.querySelector(".score2").innerHTML = newScore2.toString()
                alert("Hourra")
            }
        }
    }
}

function checkLine8 () {
    if (buttons[2].innerHTML === "X") {
        if (buttons[4].innerHTML === "X") {
            if (buttons[6].innerHTML === "X") {
                let newScore1 = Number(changeScore1.innerHTML) + 1
                document.querySelector(".score1").innerHTML = newScore1.toString()
                alert("youpi")
            }
        }
    } else if (buttons[2].innerHTML === "O") {
        if (buttons[4].innerHTML === "O") {
            if (buttons[6].innerHTML === "O") {
                let newScore2 = Number(changeScore2.innerHTML) + 1
                document.querySelector(".score2").innerHTML = newScore2.toString()
                alert("Hourra")
            }
        }
    }
}