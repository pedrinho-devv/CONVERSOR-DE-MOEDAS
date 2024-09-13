const convertButton = document.querySelector(".convert-bnt");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    // Pegando o valor do input e convertendo para número
    let inputcurrencyValue = parseFloat(document.querySelector(".input-currency").value.replace('R$', '').replace('.', '').replace(',', '.'));
    
    // Verificando se o valor convertido é um número válido
    if (isNaN(inputcurrencyValue)) {
        console.error("O valor do input não é um número válido.");
        return;
    }

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
    const currencyValue = document.querySelector(".currency-value");

    // Definindo as taxas de câmbio
    const dolarToday = 5.56;
    const euroToday = 6.17;

    if (currencySelect.value === "dolar") {
        // Convertendo o valor para dólar
        const convertedValue = inputcurrencyValue / dolarToday;
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputcurrencyValue);

        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue);
    } else if (currencySelect.value === "euro") {
        // Convertendo o valor para euro
        const convertedValue = inputcurrencyValue / euroToday;
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputcurrencyValue);

        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue);
    } else {
        console.error("Seleção de moeda inválida.");
    }
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name");
    const currencyImage = document.querySelector(".img-usa");

    if (currencySelect.value === "dolar") {
        currencyName.innerHTML = "Dólar";
        currencyImage.src = "./assets/estados-unidos (1) 1.png";
    } else if (currencySelect.value === "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    } else {
        console.error("Seleção de moeda inválida.");
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
