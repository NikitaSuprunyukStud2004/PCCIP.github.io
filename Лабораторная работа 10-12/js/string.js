var S1 = "Nikita";
var S2 = "Игра на гитаре, программирование";
var isChanged = false;

child1 = createElement("p", "S1: " + S1);
document.body.appendChild(child1);

child2 = createElement("p", "S2: " + S2);
document.body.appendChild(child2);

function changeStr() {
    if (!isChanged) {
        S1 = "Павел";
        S2 = S2.split(" ").join("");
        
        child1.textContent = "S1: " + S1;
        child2.textContent = "S2: " + S2;

        isChanged = true;
    }
    else {
        S1 = "Nikita";
        S2 = "Игра на гитаре, программирование";

        child1.textContent = "S1: " + S1;
        child2.textContent = "S2: " + S2;

        isChanged = false;
    }
}