// Elements
export const currency = document.querySelector("#currency"),
coin = document.querySelector("#coin"),
quoteBtn = document.querySelector("#quote"),
form = document.querySelector("#form");

const result = document.querySelector(".result");

export function showError(mensaje) {
    cleanHTML();
    // Determine if there is an alert
    const alert = document.querySelector(".bg-danger");

    if (!alert) {
        // Show an alert
        const alert = document.createElement("div");

        alert.textContent = mensaje;
        alert.classList.add("bg-danger", "text-uppercase", "text-light", "mt-3", "py-2", "px-5", "text-center", "fw-bold");

        form.appendChild(alert);

        // Remove alert after 3 seconds
        setTimeout(() => {
            alert.classList.remove("bg-danger");
            alert.remove();
        }, 3000);
    }
}

export function showOptions(coinName) {
    // Fill the coins options
    const option = document.createElement("option");

    option.textContent = coinName;

    coin.appendChild(option);
}

export function showQuote(price, priceHigh, priceLow, variation) {
    cleanHTML();

    // calculates the percentage
    variation = Number.parseFloat(variation / 100).toFixed(2);

    const results = `
        <p class="fs-2">El precio es: <span class="fw-bold">${price}</span></p>
        <p>Precio más alto del día: <span class="fw-bold">${priceHigh}</span></p>
        <p>Precio más bajo del día: <span class="fw-bold">${priceLow}</span></p>
        <p>Variación últimas 24 horas: <span class="fw-bold">${variation}%</span></p>
        <p>Última Actualización: <span class="fw-bold">Just now</span></p>
    `;

    // Insert results in html
    result.insertAdjacentHTML("afterbegin", results);
}

// Clean HTML
function cleanHTML() {
    while (result.firstChild) {
        result.removeChild(result.firstChild);
    }
}