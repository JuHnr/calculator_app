
//CHANGEMENT DE THEME

const themeOne = document.querySelector(".position1");
const themeTwo = document.querySelector(".position2");
const themeThree = document.querySelector(".position3");

const textColor = document.querySelectorAll(".text-color");
const keypadBackground = document.querySelectorAll(".keypad-background");
const equalBackground = document.querySelectorAll(".equal-background");
const screenBackground = document.querySelector(".screen");
const keyBackground = document.querySelectorAll(".key");
const delBackground = document.querySelectorAll(".del");

const feuilleDeStyle = document.styleSheets[0];

themeOne.addEventListener("change", () => {
    if (themeOne.checked) {
        document.documentElement.style.setProperty('--main-background', 'hsl(222, 26%, 31%)');
        document.documentElement.style.setProperty('--keypad-background', 'hsl(223, 31%, 20%)');
        document.documentElement.style.setProperty('--screen-background', 'hsl(224, 36%, 15%)');
        document.documentElement.style.setProperty('--text', 'hsl(221, 14%, 31%)');
        document.documentElement.style.setProperty('--text-equal', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--text-screen', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--text-del', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--key-background-del', 'hsl(225, 21%, 49%)');
        document.documentElement.style.setProperty('--key-background-del-active', 'hsl(226, 56%, 77%)');
        document.documentElement.style.setProperty('--key-shadow-del', 'hsl(224, 28%, 35%)');
        document.documentElement.style.setProperty('--key-background-equal', 'hsl(6, 63%, 50%)');
        document.documentElement.style.setProperty('--key-background-equal-active', 'hsl(6, 93%, 67%)');
        document.documentElement.style.setProperty('--key-shadow-equal', 'hsl(6, 70%, 34%)');
        document.documentElement.style.setProperty('--key-background', 'hsl(30, 25%, 89%)');
        document.documentElement.style.setProperty('--key-shadow', 'hsl(28, 16%, 65%)');
        document.documentElement.style.setProperty('--key-active', 'hsl(0, 0%, 100%)');
    }
});

themeTwo.addEventListener("change", () => {
    if (themeTwo.checked) {
        document.documentElement.style.setProperty('--main-background', 'hsl(0, 0%, 90%)');
        document.documentElement.style.setProperty('--keypad-background', 'hsl(0, 5%, 81%)');
        document.documentElement.style.setProperty('--screen-background', 'hsl(0, 0%, 93%)');
        document.documentElement.style.setProperty('--text', 'hsl(60, 10%, 19%)');
        document.documentElement.style.setProperty('--text-equal', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--text-screen', 'hsl(60, 10%, 19%)');
        document.documentElement.style.setProperty('--text-del', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--key-background-del', 'hsl(185, 42%, 37%)');
        document.documentElement.style.setProperty('--key-background-del-active', '#62B5BD');
        document.documentElement.style.setProperty('--key-shadow-del', 'hsl(185, 58%, 25%)');
        document.documentElement.style.setProperty('--key-background-equal', 'hsl(25, 98%, 40%)');
        document.documentElement.style.setProperty('--key-background-equal-active', '#FF8B38');
        document.documentElement.style.setProperty('--key-shadow-equal', 'hsl(25, 99%, 27%)');
        document.documentElement.style.setProperty('--key-background', 'hsl(45, 7%, 89%)');
        document.documentElement.style.setProperty('--key-shadow', 'hsl(35, 11%, 61%)');
        document.documentElement.style.setProperty('--key-active', 'hsl(0, 0%, 100%)');
    }
});

themeThree.addEventListener("change", () => {
    if (themeThree.checked) {
        document.documentElement.style.setProperty('--main-background', 'hsl(268, 75%, 9%)');
        document.documentElement.style.setProperty('--keypad-background', 'hsl(268, 71%, 12%)');
        document.documentElement.style.setProperty('--screen-background', 'hsl(268, 71%, 12%)');
        document.documentElement.style.setProperty('--text', 'hsl(52, 100%, 62%)');
        document.documentElement.style.setProperty('--text-equal', 'hsl(198, 20%, 13%)');
        document.documentElement.style.setProperty('--text-screen', 'hsl(52, 100%, 62%)');
        document.documentElement.style.setProperty('--text-del', 'hsl(0, 0%, 100%)');
        document.documentElement.style.setProperty('--key-background-del', 'hsl(281, 89%, 26%)');
        document.documentElement.style.setProperty('--key-background-del-active', '#8631B0');
        document.documentElement.style.setProperty('--key-shadow-del', 'hsl(285, 91%, 52%)');
        document.documentElement.style.setProperty('--key-background-equal', 'hsl(176, 100%, 44%)');
        document.documentElement.style.setProperty('--key-background-equal-active', '#94FFF9');
        document.documentElement.style.setProperty('--key-shadow-equal', 'hsl(177, 92%, 70%)');
        document.documentElement.style.setProperty('--key-background', 'hsl(268, 47%, 21%)');
        document.documentElement.style.setProperty('--key-shadow', 'hsl(290, 70%, 36%)');
        document.documentElement.style.setProperty('--key-active', '#6B34AC');
    }
});


//calculatrice

const numbers = document.querySelectorAll("input[name=number]");
const operators = document.querySelectorAll("input[name=operator]");
const total = document.querySelector("input[name=total]");
const result = document.querySelector(".result");
const reset = document.querySelector("input[name=reset]");
const del = document.querySelector("input[name=del]");

let tableau1 = [];
let tableau2 = [];
let selectedOperator = "";

numbers.forEach(function (number) {
    number.addEventListener("click", () => {
        tableau1.push(number.value);
        updateResult();
    });
});

operators.forEach(function (operator) {
    operator.addEventListener("click", () => {
        if (tableau1.length > 0) { //vérifie qu'un chiffre a déjà été tapé
            tableau2.push(parseFloat(tableau1.join("")));
            selectedOperator = operator.value;
            tableau2.push(selectedOperator);
            tableau1 = [];
            updateResult();
        } else if (tableau2.length > 0) { //cas où on a supprimé un opérateur, permet de continuer le calcul
            selectedOperator = operator.value;
            tableau2.push(selectedOperator);
            tableau1 = [];
            updateResult();
        }

    });
});

total.addEventListener("click", function () {
    if (tableau1.length > 0) { //vérifie qu'un chiffre a déjà été tapé
        tableau2.push(parseFloat(tableau1.join("")));
    }

    const calcul = tableau2.join("").replace(/x/g, '*'); // Remplace "x" par "*"
    let totalResult;

    try {
        totalResult = eval(calcul); //eval à éviter mais problème lors des opérations chaînées sans eval
        if (totalResult == "Infinity") {
            result.textContent = "ERROR";
        } else {
            tableau1 = [totalResult];
            tableau2 = [];
            updateResult();
        };
    } catch (error) {
        result.textContent = "Error";
        tableau1 = [];
        tableau2 = [];
    }
});

function updateResult() {
    const displayValue = tableau2.join(" ") + " " + tableau1.join("");
    result.textContent = displayValue;
}

reset.addEventListener("click", resetAll);

function resetAll() {
    tableau1 = [];
    tableau2 = [];
    selectedOperator = "";
    updateResult();
}

del.addEventListener("click", deleteLast)

function deleteLast() {
    if (tableau1.length > 0) {
        tableau1.pop(); // Supprime le dernier élément du tableau (si chiffre)
    } else if (tableau2.length > 0) {
        tableau2.pop(); // Supprime le dernier élément du tableau (si opérateur)
    }
    updateResult()
}


//arrondi sur résultat ?
