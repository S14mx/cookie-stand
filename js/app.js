'use strict';

const seattleStore = document.getElementById('seattleList');
seattleStore.textContent = 'Seattle';
let hours = ['6 a.m.', '7 a.m.', '8 a.m.', '9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.'];

let seattle = {
  name: 'Seatlle',
  min: 23,
  max: 65,
  avg: 6.3,
  soldEachHour: [],
  totalPerDay: 0,

  getRandomNumbers: function () {
    return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  },
  getCookieSalesPerHour: function () {
    let cookieSalesPerHour;
    for (let i = 0; i < hours.length; i++) {
      cookieSalesPerHour = Math.ceil(this.avg * this.getRandomNumbers());
      this.soldEachHour.push(cookieSalesPerHour);
      // console.log(this.soldEachHour);
    }
    // return this.soldEachHour;
  },
  calcTotalPerDay: function () {
    let sum = 0;
    for (let i = 0; i < hours.length; i++) {
      sum += this.soldEachHour[i];
    }
    this.totalPerDay = sum;
  },
  renderList: function () {
    let listItem;
    for (let i = 0; i < this.soldEachHour.length; i++) {
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.soldEachHour[i]} cookies`;
      seattleStore.appendChild(listItem);
    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalPerDay} cookies`;
    seattleStore.appendChild(total);
  }
};
seattle.getCookieSalesPerHour();
seattle.calcTotalPerDay();
seattle.renderList();
// console.log(seattle.soldEachHour);


