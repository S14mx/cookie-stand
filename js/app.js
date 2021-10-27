'use strict';
const tableHeader = document.getElementById('tableHeader');
const tableData = document.querySelector('tbody');
const tableFooter = document.querySelector('tfoot');
const hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];
let stores = [];

//Form container

const storeForm = document.getElementById('form');

//Constructor function

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.soldEachHour = [];
  this.totalPerDay = 0;
  stores.push(this);
}

//Prototype functions

Store.prototype.getRandomNumbers = function () {
  return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
};
Store.prototype.getCookieSalesPerHour = function () {
  let cookieSalesPerHour;
  for (let i = 0; i < hours.length; i++) {
    cookieSalesPerHour = Math.ceil(this.avg * this.getRandomNumbers());
    this.soldEachHour.push(cookieSalesPerHour);
    this.totalPerDay += this.soldEachHour[i];
  }
};

Store.prototype.renderTable = function () {
  this.getRandomNumbers();
  this.getCookieSalesPerHour();
  let td;
  let tr = document.createElement('tr');
  tableData.appendChild(tr);
  let blankCell = document.createElement('th');
  blankCell.textContent = this.name;
  tr.appendChild(blankCell);
  for (let i = 0; i < this.soldEachHour.length; i++) {
    td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.soldEachHour[i];
  }
  let dailyLocationTotal = document.createElement('td');
  tr.appendChild(dailyLocationTotal);
  dailyLocationTotal.textContent = this.totalPerDay;
};

//Handle submit function

function handleSubmit(event) {
  event.preventDefault();
  let storeName = event.target.storeName.value;
  let minCust = parseInt(event.target.minCust.value);
  let maxCust = parseInt(event.target.maxCust.value);
  let avgPerCust = parseInt(event.target.avgPerCust.value);

  let newStore = new Store(storeName, minCust, maxCust, avgPerCust);
  newStore.renderTable();
  document.getElementById('old-footer').remove();
  document.getElementById('form').reset();
  renderFooter();
}

//Header function

let renderHeader = function () {
  let th;
  let blankCell = document.createElement('th');
  tableHeader.appendChild(blankCell);
  blankCell.textContent = '';
  for (let i = 0; i < hours.length; i++) {
    th = document.createElement('th');
    tableHeader.appendChild(th);
    th.textContent = hours[i];
  }
  let headerTotal = document.createElement('th');
  tableHeader.appendChild(headerTotal);
  headerTotal.textContent = 'Daily Location Total';
};

//Footer function

let renderFooter = function () {
  let td;
  let grandTotalValue = 0;
  let hourTotal = 0;
  let tr = document.createElement('tr');
  tr.setAttribute('id', 'old-footer');
  tableFooter.appendChild(tr);
  let th = document.createElement('th');
  tr.appendChild(th);
  th.textContent = 'Totals';
  for (let i = 0; i < hours.length; i++) {
    td = document.createElement('td');
    tr.appendChild(td);
    for (let j = 0; j < stores.length; j++) {
      hourTotal += stores[j].soldEachHour[i];
    }
    td.textContent = hourTotal;
    grandTotalValue += hourTotal;
    hourTotal = 0;
  }
  let grandTotal = document.createElement('td');
  tr.appendChild(grandTotal);
  grandTotal.textContent = grandTotalValue;
};

renderHeader();


new Store('Seattle', 23, 65, 6.3);
new Store('Tokyo', 3, 24, 1.2);
new Store('Dubai', 11, 38, 0.7);
new Store('Paris', 20, 38, 2.3);
new Store('Lima', 2, 16, 4.6);


//Render table function call

for (let i = 0; i < stores.length; i++) {
  stores[i].renderTable();
}

renderFooter();

storeForm.addEventListener('submit', handleSubmit);

