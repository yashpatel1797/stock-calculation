var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var btnSubmit = document.querySelector("#btn-submit");
var output = document.querySelector("#output");



function submitHandler(){
    calculateProfitAndLoss(Number(initialPrice.value), Number(stockQuantity.value), Number(currentPrice.value));
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) * 100;
        showMessage(`Loss is ${loss} and the percent is ${lossPercentage}`, "Red");
    } else if(initial < current){
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/initial) * 100;
        showMessage(`Profit is ${profit} and the percent is ${profitPercentage}`, "Green");
    } else {
        showMessage(`Neither profit nor loss!`, "black");
    }
}

function showMessage(message, color){
    output.innerText = message;
    output.style.color = color;

}

btnSubmit.addEventListener("click", submitHandler);
