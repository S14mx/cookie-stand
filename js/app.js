'use strict';
//Seattle store
const tableHeader = document.getElementById('tableHeader');
const tableData = document.querySelector('tbody');
const tableFooter = document.querySelector('tfoot');
const hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];
let stores = [];
//Form container

const storeForm = document.getElementById('form');

function Store(name, min, max, avg) {
  this.name = name;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.soldEachHour = [];
  this.totalPerDay = 0;
  this.getRandomNumbers = function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  };
  this.getCookieSalesPerHour = function () {
    let cookieSalesPerHour;
    for (let i = 0; i < hours.length; i++) {
      cookieSalesPerHour = Math.ceil(this.avg * this.getRandomNumbers());
      this.soldEachHour.push(cookieSalesPerHour);
      this.totalPerDay += this.soldEachHour[i];
    }
  };
  this.renderTable = function () {
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
  stores.push(this);
}

//Handle submit function

function handleSubmit(event){
  event.preventDefault();
  let storeName = event.target.storeName.value;
  let minCust = event.target.minCust.value;
  let maxCust = event.target.maxCust.value;
  let avgPerCust = event.target.avgPerCust.value;

  let newStore = new Store(storeName, minCust, maxCust, avgPerCust);
  newStore.renderTable();
  document.getElementById('old-footer').remove();
  document.getElementById('form').reset();
  renderFooter();

//delete current totals row
//re-render totals row
}

// header function
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


let seattle = new Store('Seattle', 23, 65, 6.3);
let tokyo = new Store('Tokyo', 3, 24, 1.2);
let dubai = new Store('Dubai', 11, 38, 0.7);
let paris = new Store('Paris', 20, 38, 2.3);
let lima = new Store('Lima', 2, 16, 4.6);

seattle.renderTable();
tokyo.renderTable();
dubai.renderTable();
paris.renderTable();
lima.renderTable();

renderFooter();

storeForm.addEventListener('submit', handleSubmit);

