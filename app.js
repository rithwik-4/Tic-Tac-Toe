let user1 = true, user2 = true;
let user1Score = 0, user2Score = 0, drawScore = 0;
let check = [false, false, false, false, false, false, false, false, false];
let user1Click = [];
let user2Click = [];

let alldivs = document.querySelectorAll(".inner-div");
let form = document.querySelector("form");
let inputOne;
let inputTwo;
let turnText = document.querySelector("#turn");

form.addEventListener("submit", (event) => {
    user1 = user2 = false;
    inputOne = document.querySelector("#input-one").value;
    inputTwo = document.querySelector("#input-two").value;
    event.preventDefault();
    form.style.display = "none";
    turnText.innerText = `${inputOne} turn`;
});

for (let i = 0; i < alldivs.length; i++) {
    alldivs[i].addEventListener("click", () => {
        if (user1 == false) {
            if (check[i] == false) {
                turnText.innerText = `${inputTwo} turn`;
                let x = document.createElement("i");
                x.classList.add("fa-solid");
                x.classList.add("fa-x");
                alldivs[i].append(x);
                user1 = true;
                user2 = false;
                check[i] = true;
                user1Click.push(i);
                verifyWin(user1Click, 1);
            }
        }
        if (user2 == false) {
            if (check[i] == false) {
                turnText.innerText = `${inputOne} turn`;
                let o = document.createElement("i");
                o.classList.add("fa-solid");
                o.classList.add("fa-o");
                alldivs[i].append(o);
                user2 = true;
                user1 = false;
                check[i] = true;
                user2Click.push(i);
                verifyWin(user2Click, 2);
            }
        }
    })
}


function verifyWin(array, user) {
    if (chanceOne(array) || chanceTwo(array) || chanceThree(array) || chanceFour(array) ||
        chanceFive(array) || chanceSix(array) || chanceSeven(array) || chanceEight(array)) {
        let result = document.querySelector("#result");
        result.style.display = "block";

        if (user == 1) {
            user1Score++;
            result.innerText = `${inputOne} win`;
        }
        else {
            user2Score++;
            result.innerText = `${inputTwo} win`;
        }
        turnText.style.display = "none";

        let displayScore = document.querySelector(".display-score");
        displayScore.style.display = "flex";
        let userOneS = document.querySelector(".user1-score");
        userOneS.innerText = `${inputOne} score = ${user1Score}`;
        let userTwoS = document.querySelector(".user2-score");
        userTwoS.innerText = `${inputTwo} score = ${user2Score}`;
        let drawS = document.querySelector(".draw-score");
        drawS.innerText = `draw = ${drawScore}`;
        updateBoard();

    }
    else {
        if (user1Click.length + user2Click.length == 9) {
            let result = document.querySelector("#result");
            result.style.display = "block";
            result.innerText = `Draw`;

            drawScore++;
            turnText.style.display = "none";

            let displayScore = document.querySelector(".display-score");
            displayScore.style.display = "flex";
            let userOneS = document.querySelector(".user1-score");
            userOneS.innerText = `${inputOne} score = ${user1Score}`;
            let userTwoS = document.querySelector(".user2-score");
            userTwoS.innerText = `${inputTwo} score = ${user2Score}`;
            let drawS = document.querySelector(".draw-score");
            drawS.innerText = `draw = ${drawScore}`;
            updateBoard();
        }
    }
}

function updateBoard() {
    user1 = user2 = true;
    restart();
}

function restart() {

    let restartdiv = document.querySelector(".restart");
    restartdiv.style.display = "flex";
    restartdiv.style.flexDirection = "column";
    restartdiv.style.gap = "20px";


}


let restartbtn = document.querySelector(".restart");

restartbtn.addEventListener("click", function (event) {
    if (event.target.className == "start-new-game-btn") {

        user1 = true, user2 = true;
        check = [false, false, false, false, false, false, false, false, false];
        user1Click = [];
        user2Click = [];
        let i = document.querySelectorAll("i");
        for (item of i) {
            item.remove();
        }

        let result = document.querySelector("#result");
        result.style.display = "none";

        let displayScore = document.querySelector(".display-score");
        displayScore.style.display = "none";

        if ((user1Score + user2Score + drawScore) % 2 == 0) {
            turnText.innerText = `${inputOne} turn`;
            user1 = false;
        }
        else {
            turnText.innerText = `${inputTwo} turn`;
            user2 = false;
        }
        turnText.style.display = "block";
        let winline = document.querySelector(".animation");
        winline.setAttribute("class", "animation");
        restartbtn.style.display = "none";
    }
    if (event.target.className == "end-game") {
        location.reload();
    }
});



function chanceOne(array) {
    let verifty = true;
    for (item of [0, 4, 8]) {
        if (array.includes(item) == false) {
            verifty = false;
            break;
        }
    }
    if (verifty) {
        let winline = document.querySelector(".animation");
        winline.classList.add("ani-one");
    }
    return verifty;
}

function chanceTwo(array) {
    let verifty = true;
    for (item of [2, 4, 6]) {
        if (array.includes(item) == false) {
            verifty = false;
            break;
        }
    }
    if (verifty) {
        let winline = document.querySelector(".animation");
        winline.classList.add("ani-two");
    }
    return verifty;
}

function chanceThree(array) {
    let verifty = true;
    for (item of [0, 1, 2]) {
        if (array.includes(item) == false) {
            verifty = false;
            break;
        }
    }
    if (verifty) {
        let winline = document.querySelector(".animation");
        winline.classList.add("ani-three");
    }
    return verifty;
}

function chanceFour(array) {
    let verifty = true;
    for (item of [3, 4, 5]) {
        if (array.includes(item) == false) {
            verifty = false;
            break;
        }
    }
    if (verifty) {
        let winline = document.querySelector(".animation");
        winline.classList.add("ani-four");
    }
    return verifty;
}

function chanceFive(array) {
    let verifty = true;
    for (item of [6, 7, 8]) {
        if (array.includes(item) == false) {
            verifty = false;
            break;
        }
    }
    if (verifty) {
        let winline = document.querySelector(".animation");
        winline.classList.add("ani-five");
    }
    return verifty;
}

function chanceSix(array) {
    let verifty = true;
    for (item of [0, 3, 6]) {
        if (array.includes(item) == false) {
            verifty = false;
            break;
        }
    }
    if (verifty) {
        let winline = document.querySelector(".animation");
        winline.classList.add("ani-six");
    }
    return verifty;
}

function chanceSeven(array) {
    let verifty = true;
    for (item of [1, 4, 7]) {
        if (array.includes(item) == false) {
            verifty = false;
            break;
        }
    }
    if (verifty) {
        let winline = document.querySelector(".animation");
        winline.classList.add("ani-seven");
    }
    return verifty;
}

function chanceEight(array) {
    let verifty = true;
    for (item of [2, 5, 8]) {
        if (array.includes(item) == false) {
            verifty = false;
            break;
        }
    }
    if (verifty) {
        let winline = document.querySelector(".animation");
        winline.classList.add("ani-eight");
    }
    return verifty;
}

