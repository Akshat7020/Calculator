function mybtn(){
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var amt = document.getElementById("amt").value;
    var result = 0;
    const conversionRates = {
        btc: { inr: 7516738, usd: 86192, aud: 136957, eur: 79599.28, kwd: 26554.31, omr: 33055.56 },
        jiocoin: { inr: 22.0115, usd: 0.2549, aud: 0.391, eur: 0.233, kwd: 0.077, omr: 0.098 },
        pi: { inr: 156.69, usd: 1.7979, aud: 0.5123, eur: 0.5, kwd: 0.5720, omr: 0.5 }
    };
    
    if (conversionRates[from] && conversionRates[from][to]) {
        result = amt * conversionRates[from][to];
    } else {
        result = amt; 
    }

    const currency={
        inr:"₹",
        usd:"$",
        aud:"$",
        eur:"€",
        kwd:"د.ك",
        omr:"ر.ع."
    };
    document.getElementById("price").innerHTML = "The converted amount is: " + currency[to] + " " + result;
}