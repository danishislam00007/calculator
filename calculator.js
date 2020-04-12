let runningTotal = 0;
let buffer = '0';
let previousOperator = null;
const screen = document.querySelector(".screen")


document
.querySelector(".calc-buttons")
.addEventListener("click", function(event) {
    
    buttonClick(event.target.innerText);
    
});

function buttonClick(value) {
    
    if(isNaN(parseInt(value))) {
        handleSymbol(value);
    }else {
        handleNumber(value);
    }
    
}

function handleSymbol(value) {}

function handleNumber(value) {
    if(buffer === "0") {
        buffer = value;
    }else {
        buffer += value;
    }
    rerender();
}

function rerender() {
    screen.innerText = buffer;
}