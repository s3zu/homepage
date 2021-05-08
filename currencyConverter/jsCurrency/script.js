const formElement = document.querySelector(".js-form");
const amountElement = document.querySelector(".js-amount");
const currencyElement = document.querySelector(".js-currency");
const resultElement = document.querySelector(".js-result");

let euro = 4.5728;
let dollar = 3.7824;
let gbp = 5.2679;

formElement.addEventListener("input", () => {
    let amount = +amountElement.value;
    let currency = currencyElement.value;

    let result;
    switch (currency) {
        case "euro":
            result = amount / euro;
            break;

        case "dollar":
            result = amount / dollar;
            break;

        case "gbp":
            result = amount / gbp;
            break;


    }




    resultElement.innerText = result.toFixed(2);

});
