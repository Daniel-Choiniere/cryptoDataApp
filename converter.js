// // Get the curreent exchange rate for user submitted query
// document.getElementById('conversion').addEventListener('click', convert);

// function convert() {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=JCQV2KWHYVU535I7', true);
        
//     // let url = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency="+firstCur+"&to_currency="+secondCur+"&apikey=JCQV2KWHYVU535I7";
//     // console.log(url);

//     xhr.onload = function() {
//         if (this.status == 200) {
//             let convertData = JSON.parse(this.responseText);
            
//             let exchangeRate = parseFloat(convertData["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
            
    
    
//     document.getElementById('convertData').innerText = exchangeRate; 
    
//     }
// };
// }

function convert() {
    let firstCur = document.getElementById('crypto1').value;
    let secondCur = document.getElementById('crypto2').value;
    let amount = document.getElementById('crypto1Value').value;
    
    document.getElementById('convertData').innerHTML = 'The user input is: ' + firstCur + " " + secondCur + " " + amount;
    console.log('The user input is: ' + firstCur + secondCur + amount);
}

convert();
