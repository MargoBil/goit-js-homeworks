'use strict';
const countryDeliveryChina = 'КИТАЙ';
const countryDeliveryChile = 'ЧИЛИ';
const countryDeliveryAustralia = 'АВСТРАЛИЯ';
const countryDeliveryIndia = 'ИНДИЯ';
const countryDeliveryJamaica = 'ЯМАЙКА';
const costDeliveryChina = 100;
const costDeliveryChile = 250;
const costDeliveryAustralia = 170;
const costDeliveryIndia = 80;
const costDeliveryJamaica = 120;
let costDelivery;
let inputCountryDelivery = prompt ('Пожалуйста, укажите страну доставки.');
let alignmentCountryDelivery = inputCountryDelivery.toUpperCase ();
switch (alignmentCountryDelivery) {
  case countryDeliveryChina:
    costDelivery = costDeliveryChina;
    break;
  case countryDeliveryChile:
    costDelivery = costDeliveryChile;
    break;
  case countryDeliveryAustralia:
    costDelivery = costDeliveryAustralia;
    break;
  case ountryDeliveryIndia:
    costDelivery = costDeliveryIndia;
    break;
  case costDeliveryJamaica:
    costDelivery = costDeliveryJamaica;
    break;

  default:
    alert ('В вашей стране доставка не доступна');
    break;
}
alert (
  `Доставка в ${alignmentCountryDelivery} будет стоить ${costDelivery} кредитов`
);
