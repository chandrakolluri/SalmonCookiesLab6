'use strict';

var visitingHours = ['6AM','7AM','8AM','9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM','6PM','7PM','8PM'];

var pikeStreet  = { 
  minCustomers: Math.random(10,20), 
  maxCustomers: Math.random(21,30), 
  avgCookies: 10
};

var pikeStreetResults = [];
var pikeStreetHourlyTotals = [];
for (var i=0;i<visitingHours.length;i++){
  //alert('try');
  pikeStreetResults[i] = Math.round(Math.random() * (30 - 1) + 1);
  pikeStreetHourlyTotals[i] = visitingHours[i] +': ' + pikeStreetResults[i] + ' cookies' ;
}
var totalCookies = 0;
//var avgCookies;


  
function avgCookiesPerHour() {
 
  for (var i=0;i<visitingHours.length;i++){
    totalCookies =  totalCookies + pikeStreetResults[i];
  }
  // avgCookies = totalCookies / (visitingHours.length - 1);
  return totalCookies / (visitingHours.length - 1);
}

//alert('Min ' + Math.min.apply(null,pikeStreetResults));

//alert(' Randon ' + Math.round(Math.random(10,20)) * 12);
pikeStreet.minCustomers = Math.min.apply(null,pikeStreetResults);
pikeStreet.maxCustomers = Math.max.apply(null,pikeStreetResults);
pikeStreet.avgCookies = Math.round(avgCookiesPerHour());

//alert('Reults :' + pikeStreet);
console.log('Reults :' + pikeStreet.avgCookies);
console.log('Reults2 :' + pikeStreet.minCustomers);
console.log('Reults3 :' + pikeStreet.maxCustomers);
console.log('try ' + pikeStreetHourlyTotals);


var taList = document.getElementById('ta-list');

for (var k = 0; k < pikeStreetHourlyTotals.length; k++) {
  // 1. Create new element
  var liEl = document.createElement('li');
  // 2. Give the element some content
  liEl.textContent = pikeStreetHourlyTotals[k];
  // 3. Append the new element to its parent in the DOM
  taList.appendChild(liEl);
}





