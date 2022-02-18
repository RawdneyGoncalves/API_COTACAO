const request = require("request");

const money = "USD-BRL,EUR-BRL,BTC-BRL";
const options = {
  url: `https://economia.awesomeapi.com.br/last/${money}`,
  headers: {
    Accept: "application/json",
    "Accept-Charset": "utf-8",
  },
};
//DOLAR
const callback_dolar = function (error, response, body) {
  try {
    let json = JSON.parse(body);
    cotacao = json.USDBRL["bid"];
    dia = json.USDBRL["create_date"];
    console.log("DOLAR = R$: " + cotacao + " Dia: " + dia);
  } catch (error) {
    console.log(error);
  }
};
request(options, callback_dolar);
