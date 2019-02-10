// RETREIVING BTC DATA
document.getElementById('btcDaily').addEventListener('click', loadBtcDaily);


// Load Daily Bitcoin Data
function loadBtcDaily() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=BTC&market=USD&apikey=JCQV2KWHYVU535I7', true);
    
    xhr.onload = function() {
        if (this.status == 200) {
            var btcData = JSON.parse(this.responseText);
            
            let btcOpen = btcData["Time Series (Digital Currency Daily)"]["2019-02-09"]["1a. open (USD)"];
            let btcHigh = btcData["Time Series (Digital Currency Daily)"]["2019-02-09"]["2a. high (USD)"];
            let btcLow = btcData["Time Series (Digital Currency Daily)"]["2019-02-09"]["3a. low (USD)"];
            let btcClose = btcData["Time Series (Digital Currency Daily)"]["2019-02-09"]["4a. close (USD)"];
            let btcVolume = btcData["Time Series (Digital Currency Daily)"]["2019-02-09"]["5. volume"];
            let btcMarketcap = btcData["Time Series (Digital Currency Daily)"]["2019-02-09"]["6. market cap (USD)"];
            
            
            // Need to convert the variables from a string to a float, then bring it to two decimal points
            let open = parseFloat(btcOpen).toFixed(2);
            let high = parseFloat(btcHigh).toFixed(2);
            let low = parseFloat(btcLow).toFixed(2);
            let close = parseFloat(btcClose).toFixed(2);
            let volume = parseFloat(btcVolume).toFixed(2);
            let marketcap = parseFloat(btcMarketcap).toFixed(2);
            
            
            
            let output = '<div class="user">' + 
                        '<ul>' +
                        '<li>Daily Open: $' + open + '</li>' +
                        '<li>Daily High: $' + high + '</li>' + 
                        '<li>Daily Low: $' + low + '</li>' + 
                        '<li>Daily Close: $' + close + '</li>' + 
                        '<li>Daily Volume: $' + volume + '</li>' + 
                        '<li>Daily Marketcap: $' + marketcap + '</li>' +
                        '</ul>' +
                         '</div>';
            
            document.getElementById('bitcoinData').innerHTML = output;
        }    
    };
xhr.send();        
}   
