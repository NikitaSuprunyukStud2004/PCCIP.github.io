function mathInputChange(e) {
    document.getElementById("mathOutput").textContent = calc(e.target.value)
}

function calc(x) {
     if (Math.pow(x, 2) > 4) {
        alert("Отрицательный корень!");
        return "y = null";
    }
    else return "y = " + Math.sqrt(4 - Math.pow(x, 2));
}