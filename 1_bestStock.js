'use strict';


const bestPrice = (stocks) => {
  let min = stocks[0];
  let current = stocks[1];
  let mostMoney = current - min;

  if (stocks.length < 2) {
    return -1;
  }

  for (var i = 0; i < stocks.length-1; i++) {
    min = Math.min(min, stocks[i]);
    let current =  stocks[i +1] - min
    mostMoney = Math.max(mostMoney, current);
  }
  return mostMoney;
}


module.exports = bestPrice;
