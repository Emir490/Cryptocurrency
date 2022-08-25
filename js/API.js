import { showOptions, showQuote } from "./ui.js";

const getCoins =  cryptCoins => new Promise( resolve => {
    resolve(cryptCoins);
});

class API {
    constructor(currency, coin) {
        this.currency = currency;
        this.coin = coin;
    }

    getCrypto() {
        // get API
        let url;
        if (this.currency === '') {
            url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        } else  {
            url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=${this.currency}`;
        }

        // get json
        fetch(url) 
            .then( response => response.json())
            .then( result => getCoins(result.Data))
            .then( cryptCoins => {
                if (this.currency === '') {
                    // Fill in select options
                    cryptCoins.forEach(i => {
                        showOptions(i.CoinInfo.FullName);
                    });
                } else {
                    // Call the function that will display the results
                    switch (this.currency) {
                        case "USD":
                            showQuote(cryptCoins[this.coin].DISPLAY.USD.PRICE, cryptCoins[this.coin].DISPLAY.USD.HIGHDAY, cryptCoins[this.coin].DISPLAY.USD.LOWDAY, cryptCoins[this.coin].RAW.USD.CHANGE24HOUR);
                            break;
                        
                        case "MXN":
                            showQuote(cryptCoins[this.coin].DISPLAY.MXN.PRICE, cryptCoins[this.coin].DISPLAY.MXN.HIGHDAY, cryptCoins[this.coin].DISPLAY.MXN.LOWDAY, cryptCoins[this.coin].RAW.MXN.CHANGE24HOUR);
                            break;

                        case "GBP":
                            showQuote(cryptCoins[this.coin].DISPLAY.GBP.PRICE, cryptCoins[this.coin].DISPLAY.GBP.HIGHDAY, cryptCoins[this.coin].DISPLAY.GBP.LOWDAY, cryptCoins[this.coin].RAW.GBP.CHANGE24HOUR);
                            break;

                        case "EUR":
                            showQuote(cryptCoins[this.coin].DISPLAY.EUR.PRICE, cryptCoins[this.coin].DISPLAY.EUR.HIGHDAY, cryptCoins[this.coin].DISPLAY.EUR.LOWDAY, cryptCoins[this.coin].RAW.EUR.CHANGE24HOUR);
                            break;
                    }
                }
            });
    }
}
export default API;