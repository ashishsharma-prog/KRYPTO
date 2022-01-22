var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "coinrankinge7ffee1c6f726ace6e6a2f5bcdbf452bcd1094900965ed4f"

var apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);

fetch(`${proxyUrl}${baseUrl}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-My-Custom-Header': `${apiKey}`,
      'Access-Control-Allow-Origin': "*"
    }
}).then((response)=>{
    if (response.ok) {
        response.json().then((json) => {
          console.log(json.data.coins);
          let coinsData = json.data.coins
          if(coinsData.length >0){
              var cryptoCoins = " "
          }
          coinsData.map((coins)=>{
              cryptoCoins +="<tr>"
              cryptoCoins += `<td> ${coins.uuid} </td>`
              cryptoCoins += `<td> ${coins.btcPrice} </td>`
              cryptoCoins += `<td> ${coins.rank} </td>`
              cryptoCoins += `<td> ${coins.tier} </td>`
              cryptoCoins += `<td> ${coins.name} </td>`
              cryptoCoins += `<td> $ ${Math.round(coins.price)} Billion </td>`
              cryptoCoins += `<td> ${coins.symbol} </td>`;
              "</tr>"
          })
          document.getElementById("data").innerHTML = cryptoCoins
        })
    }
}).catch((error)=>{
    console.log(error)
})
