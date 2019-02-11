/*global today*/
// RETREIVING XRP DATA
document.getElementById('adaDaily').addEventListener('click', loadAdaDaily);

// Load Daily Bitcoin Data
function loadAdaDaily() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=ADA&market=USD&apikey=JCQV2KWHYVU535I7', true);
    
    xhr.onload = function() {
        if (this.status == 200) {
            var btcData = JSON.parse(this.responseText);
            
            // parsing through data to get what i need
            // Need to convert the variables from a string to a float, then bring it to two decimal points
            let name = btcData["Meta Data"]["3. Digital Currency Name"];
            let open = parseFloat(btcData["Time Series (Digital Currency Daily)"][today]["1a. open (USD)"]).toFixed(2);
            let high = parseFloat(btcData["Time Series (Digital Currency Daily)"][today]["2a. high (USD)"]).toFixed(2);
            let low = parseFloat(btcData["Time Series (Digital Currency Daily)"][today]["3a. low (USD)"]).toFixed(2);
            let close = parseFloat(btcData["Time Series (Digital Currency Daily)"][today]["4a. close (USD)"]).toFixed(2);
            let volume = parseFloat(btcData["Time Series (Digital Currency Daily)"][today]["5. volume"]).toFixed(2);
            let marketcap = parseFloat(btcData["Time Series (Digital Currency Daily)"][today]["6. market cap (USD)"]).toFixed(2);
        
            // build the html to display the parsed data on webpage
            let output = '<div class="user">' + 
                        '<ul>' +
                        '<li style="font-size: 30px">' + '<strong>' + name + '</strong>' + '</li>' +
                        '<li>Daily Open: $' + open + '</li>' +
                        '<li>Daily High: $' + high + '</li>' + 
                        '<li>Daily Low: $' + low + '</li>' + 
                        '<li>Daily Close: $' + close + '</li>' + 
                        '<li>Daily Volume: $' + volume + '</li>' + 
                        '<li>Daily Marketcap: $' + marketcap + '</li>' +
                        '</ul>' +
                         '</div>';
            
            document.getElementById('dataDisplay').innerHTML = output;
        }    
    };
xhr.send();        
}   