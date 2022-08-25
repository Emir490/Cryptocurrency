import { form, currency, coin, quoteBtn, showError } from './ui.js';
import API from './API.js';

// When window load
window.addEventListener('load', init);

function init() {
    // Instance class
    const api = new API(currency.value, coin.value);
    // Call method
    api.getCrypto();
    // Event click
    quoteBtn.addEventListener("click", consultAPI);
}

function consultAPI() {
    // Validate the inputs
    if (currency.value === '' || coin.value === '') {
        showError("Ambos campos son obligatorios");
    } else {
        // New instance class
        const api = new API(currency.value, coin.selectedIndex - 1);
        // Call method
        api.getCrypto();
    }
    // Reset form
    form.reset();
}