const request = require('request');

//https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL

const money = 'USD-BRL,EUR-BRL,BTC-BRL';
const options = {
  url: `https://economia.awesomeapi.com.br/last/${money}`,
  headers: {
    Accept: 'application/json',
    'Accept-Charset': 'utf-8',
  },
};
//DOLAR
const callback_dolar = function (error, response, body) {
  try {
    let json = JSON.parse(body);
    cotacao = json.EURBRL['bid'];
    nome = json.EURBRL['name'];
    console.log(nome);
    dia = json.USDBRL['create_date'];
    console.log('DOLAR = R$: ' + cotacao + ' Dia: ' + dia);
  } catch (error) {
    console.log(error);
  }
};
//REAL
const callback_euro = function (error, response, body) {
  try {
    let json = JSON.parse(body);
    cotacao = json.EURBRL['bid'];
    dia = json.EURBRL['create_date'];
    nome = json.EURBRL['name'];
    console.log(nome);
    console.log('EURO  = R$: ' + cotacao + ' Dia: ' + dia);
  } catch (error) {
    console.log(error);
  }
};
//BTC
const callback_bct = function (error, response, body) {
  try {
    let json = JSON.parse(body);
    cotacao = json.BTCBRL['bid'];
    dia = json.BTCBRL['create_date'];
    nome = json.BTCBRL['name'];
    console.log(nome);
    console.log('BTC  = R$: ' + cotacao + ' Dia: ' + dia);
  } catch (error) {
    console.log(error);
  }
};
//TUDO
const callback_todas = function (error, response, body) {
  try {
    let json = JSON.parse(body);
    console.log(json);
  } catch (error) {
    console.log(error);
  }
};
setInterval(() => {
  request(options, callback_dolar);
  request(options, callback_euro);
  request(options, callback_bct);
  console.log('###################');
}, 5000);
