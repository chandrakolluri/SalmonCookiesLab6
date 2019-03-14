'use strict';

var visitingHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];


function LocationDetails(locationName, minCustomers, maxCustomers,avgCookies,totalCookies) {
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.totalCookies = totalCookies;
}

var pikeStreet = new LocationDetails('1st and Pike',Math.random(10,20),Math.random(21,30));
var seaTac = new LocationDetails('SeaTac Airport',Math.random(10,20),Math.random(21,30));
var seattleCenter  = new LocationDetails('seattleCenter',Math.random(10,20),Math.random(21,30));
var capitolHill  = new LocationDetails('Capitol Hill',Math.random(10,20),Math.random(21,30));
var alki  = new LocationDetails('Alki',Math.random(10,20),Math.random(21,30));

var pikeLocationSales = salesDetails(visitingHours);
var pikeHourlySalesDetails = hourlySales(pikeLocationSales);
pikeStreet.minCustomers = Math.min.apply(null,pikeLocationSales);
pikeStreet.maxCustomers = Math.max.apply(null,pikeLocationSales);
pikeStreet.avgCookies = Math.round(avgCookiesPerHour(pikeLocationSales));
pikeStreet.totalCookies = totalCookiesSoldPerLocation(pikeLocationSales);
consoleLogs(pikeStreet.totalCookies,pikeStreet.locationName,pikeStreet.avgCookies,pikeStreet.minCustomers,pikeStreet.maxCustomers,pikeLocationSales);

var pikeList = document.getElementById('pike-list');
buildList(pikeHourlySalesDetails,pikeList);

var seaTacSales = salesDetails(visitingHours);
var seaTacSalesDetails = hourlySales(seaTacSales);
seaTac.minCustomers = Math.min.apply(null,seaTacSales);
seaTac.maxCustomers = Math.max.apply(null,seaTacSales);
seaTac.avgCookies = Math.round(avgCookiesPerHour(seaTacSales));
seaTac.totalCookies = totalCookiesSoldPerLocation(seaTacSales);
consoleLogs(seaTac.totalCookies,seaTac.locationName,seaTac.avgCookies,seaTac.minCustomers,seaTac.maxCustomers,seaTacSales);

var seaTacList = document.getElementById('seaTac-list');
buildList(seaTacSalesDetails,seaTacList);

var seattleCenterSales = salesDetails(visitingHours);
var seattleCenterSalesDetails = hourlySales(seattleCenterSales);
seattleCenter.minCustomers = Math.min.apply(null,seattleCenterSales);
seattleCenter.maxCustomers = Math.max.apply(null,seattleCenterSales);
seattleCenter.avgCookies = Math.round(avgCookiesPerHour(seattleCenterSales));
seattleCenter.totalCookies = totalCookiesSoldPerLocation(seattleCenterSales);
consoleLogs(seattleCenter.totalCookies,seattleCenter.locationName,seattleCenter.avgCookies,seattleCenter.minCustomers,seattleCenter.maxCustomers,seaTacSales);

var seattleCenterList = document.getElementById('seattleCenter-list');
buildList(seattleCenterSalesDetails,seattleCenterList);

var capitolHillSales = salesDetails(visitingHours);
var capitolHillSalesDetails = hourlySales(capitolHillSales);
capitolHill.minCustomers = Math.min.apply(null,capitolHillSales);
capitolHill.maxCustomers = Math.max.apply(null,capitolHillSales);
capitolHill.avgCookies = Math.round(avgCookiesPerHour(capitolHillSales));
capitolHill.totalCookies = totalCookiesSoldPerLocation(capitolHillSales);
consoleLogs(capitolHill.totalCookies,capitolHill.locationName,capitolHill.avgCookies,capitolHill.minCustomers,capitolHill.maxCustomers,capitolHillSales);

var capitolHillList = document.getElementById('capitolHill-list');
buildList(capitolHillSalesDetails,capitolHillList);

var alkiSales = salesDetails(visitingHours);
var alkiSalesDetails = hourlySales(seaTacSales);
alki.minCustomers = Math.min.apply(null,alkiSales);
alki.maxCustomers = Math.max.apply(null,alkiSales);
alki.avgCookies = Math.round(avgCookiesPerHour(alkiSales));
alki.totalCookies = totalCookiesSoldPerLocation(alkiSales);
consoleLogs(alki.totalCookies,alki.locationName,alki.avgCookies,alki.minCustomers,alki.maxCustomers,alkiSales);

var alkiList = document.getElementById('alki-list');
buildList(alkiSalesDetails,alkiList);

function salesDetails(visitingHours) {
  var locationSalesDetails = [];
  for (var i=0;i<visitingHours.length;i++){
    locationSalesDetails[i] = Math.round(Math.random() * (30 - 1) + 1);
  }
  return locationSalesDetails;
}

function hourlySales(locationSalesDetails){
  var locationHourlyTotals = [];
  var totalSalesCount = 0;
  for (var i=0;i<locationSalesDetails.length;i++){
    locationHourlyTotals[i] = visitingHours[i] +': ' + locationSalesDetails[i] + ' Cookies' ;
    totalSalesCount = totalSalesCount + locationSalesDetails[i];
  }
  locationHourlyTotals[i] = 'Total: ' + totalSalesCount + ' Cookies';
  return locationHourlyTotals;
}
 
function avgCookiesPerHour(locationSales) {
  var totalCookies = 0;
  for (var i=0;i<visitingHours.length;i++){
    totalCookies =  totalCookies + locationSales[i];
  }
  return totalCookies / (visitingHours.length - 1);
}

function totalCookiesSoldPerLocation(locationSales) {
  var totalCookiesSold = 0;
  for (var i=0;i<visitingHours.length;i++){
    totalCookiesSold =  totalCookiesSold + locationSales[i];
  }
  return totalCookiesSold;
}

function consoleLogs(totalCookies,locationName,avgCookies,minCustomers,maxCustomers,locationSales) {
  console.log('Location Name :' + locationName);
  console.log('Centre totals: ' + locationSales);
  console.log('Average Cookies per hour :' + avgCookies);
  console.log('Minimum customers count :' + minCustomers);
  console.log('Maximum customers count :' + maxCustomers);
  console.log('Total Cookies count :' + totalCookies);
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


// var pikeStreet  = { 
//   locationName: '1st and Pike',
//   minCustomers: Math.random(10,20), 
//   maxCustomers: Math.random(21,30), 
//   avgCookies: 0,
//   totalCookies: 0
// };
  
// var seaTac  = { 
  //   locationName: 'SeaTac Airport',
  //   minCustomers: Math.random(10,20), 
  //   maxCustomers: Math.random(21,30), 
  //   avgCookies: 0,
  //   totalCookies: 0
  // };
  
  // var seattleCenter  = { 
  //   locationName: 'Seattle Center',
  //   minCustomers: Math.random(10,20), 
  //   maxCustomers: Math.random(21,30), 
  //   avgCookies: 0,
  //   totalCookies: 0
  // };
  
  // var capitolHill  = { 
  //   locationName: 'Capitol Hill',
  //   minCustomers: Math.random(10,20), 
  //   maxCustomers: Math.random(21,30), 
  //   avgCookies: 10,
  //   totalCookies: 10
  // };
  
  // var alki  = { 
  //   locationName: 'Alki',
  //   minCustomers: Math.random(10,20), 
  //   maxCustomers: Math.random(21,30), 
  //   avgCookies: 0,
  //   totalCookies: 0
  // };




