const getData = async () => {
    try {
        let response = await fetch("https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11")
        let currencyData = await response.json();
        return currencyData;
        
    } catch (e) {
        console.error(e);
    }

}

const displayData = async () => {
    try {
        let result = await getData();
        
        let [USD,EUR,ignore,BTC] = result;

        /*
        console.log(USD);
        console.log(EUR);
        console.log(BTC);
        */

        return [USD,EUR,BTC]
        
    } catch (e) {
        console.error(e);
    }

}

displayData();

export default displayData;
