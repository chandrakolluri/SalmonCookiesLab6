'use strict';

var taTeam = ['Christoph', 'Jakey', 'Macey', 'Mickey'];
var taList = document.getElementById('ta-list');

for (var i = 0; i < taTeam.length; i++) {
  // 1. Create new element
  var liEl = document.createElement('li');
  // 2. Give the element some content
  liEl.textContent = taTeam[i];
  // 3. Append the new element to its parent in the DOM
  taList.appendChild(liEl);
}