'use strict';

var visitingHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];

var pikeStreet  = { 
  locationName: '1st and Pike',
  minCustomers: Math.random(10,20), 
  maxCustomers: Math.random(21,30), 
  avgCookies: 10
};

var seaTac  = { 
  locationName: 'SeaTac Airport',
  minCustomers: Math.random(10,20), 
  maxCustomers: Math.random(21,30), 
  avgCookies: 10
};

var seattleCenter  = { 
  locationName: 'Seattle Center',
  minCustomers: Math.random(10,20), 
  maxCustomers: Math.random(21,30), 
  avgCookies: 10
};

var capitolHill  = { 
  locationName: 'Capitol Hill',
  minCustomers: Math.random(10,20), 
  maxCustomers: Math.random(21,30), 
  avgCookies: 10
};

var alki  = { 
  locationName: 'Alki',
  minCustomers: Math.random(10,20), 
  maxCustomers: Math.random(21,30), 
  avgCookies: 10
};

var pikeLocationSales = salesDetails(visitingHours);
var pikeHourlySalesDetails = hourlySales(pikeLocationSales);
pikeStreet.minCustomers = Math.min.apply(null,pikeLocationSales);
pikeStreet.maxCustomers = Math.max.apply(null,pikeLocationSales);
pikeStreet.avgCookies = Math.round(avgCookiesPerHour(pikeLocationSales));
consoleLogs(pikeStreet.locationName,pikeStreet.avgCookies,pikeStreet.minCustomers,pikeStreet.maxCustomers,pikeLocationSales);

var pikeList = document.getElementById('pike-list');
buildList(pikeHourlySalesDetails,pikeList);

var seaTacSales = salesDetails(visitingHours);
var seaTacSalesDetails = hourlySales(seaTacSales);
seaTac.minCustomers = Math.min.apply(null,seaTacSales);
seaTac.maxCustomers = Math.max.apply(null,seaTacSales);
seaTac.avgCookies = Math.round(avgCookiesPerHour(seaTacSales));
consoleLogs(seaTac.locationName,seaTac.avgCookies,seaTac.minCustomers,seaTac.maxCustomers,seaTacSales);

var seaTacList = document.getElementById('seaTac-list');
buildList(seaTacSalesDetails,seaTacList);

var seattleCenterSales = salesDetails(visitingHours);
var seattleCenterSalesDetails = hourlySales(seattleCenterSales);
seattleCenter.minCustomers = Math.min.apply(null,seattleCenterSales);
seattleCenter.maxCustomers = Math.max.apply(null,seattleCenterSales);
seattleCenter.avgCookies = Math.round(avgCookiesPerHour(seattleCenterSales));
consoleLogs(seattleCenter.locationName,seattleCenter.avgCookies,seattleCenter.minCustomers,seattleCenter.maxCustomers,seaTacSales);

var seattleCenterList = document.getElementById('seattleCenter-list');
buildList(seattleCenterSalesDetails,seattleCenterList);

function salesDetails(visitingHours) {
  var locationSalesDetails = [];
  for (var i=0;i<visitingHours.length;i++){
    locationSalesDetails[i] = Math.round(Math.random() * (30 - 1) + 1);
  }
  return locationSalesDetails;
}

function hourlySales(locationSalesDetails){
  var locationHourlyTotals = [];
  for (var i=0;i<locationSalesDetails.length;i++){
    locationHourlyTotals[i] = visitingHours[i] +': ' + locationSalesDetails[i] + ' Cookies' ;
  }
  return locationHourlyTotals;
}
 
function avgCookiesPerHour(locationSales) {
  var totalCookies = 0;
  for (var i=0;i<visitingHours.length;i++){
    totalCookies =  totalCookies + locationSales[i];
  }
  return totalCookies / (visitingHours.length - 1);
}

function consoleLogs(locationName,avgCookies,minCustomers,maxCustomers,locationSales) {
  console.log('Location Name :' + locationName);
  console.log('Average Cookies per hour :' + avgCookies);
  console.log('Minimum customers count :' + minCustomers);
  console.log('Maximum customers count :' + maxCustomers);
  console.log('Centre totals: ' + locationSales);
  console.log('    ');
}

function buildList(hourlySalesDetails,pikeList) {
  for (var k = 0; k < hourlySalesDetails.length; k++) {
    var listElement = document.createElement('li');
    listElement.textContent = hourlySalesDetails[k];
    pikeList.appendChild(listElement);
  }

  return pikeList;
}





