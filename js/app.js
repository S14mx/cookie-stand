'use strict';
//Seattle store
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
      this.totalPerDay += this.soldEachHour[i];
    }
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
seattle.renderList();

//Tokyo store
const tokyoStore = document.getElementById('tokyoList');
tokyoStore.textContent = 'Tokyo';

let tokyo = {
  name: 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
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
      this.totalPerDay += this.soldEachHour[i];
    }
  },

  renderList: function () {
    let listItem;
    for (let i = 0; i < this.soldEachHour.length; i++) {
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.soldEachHour[i]} cookies`;
      tokyoStore.appendChild(listItem);
    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalPerDay} cookies`;
    tokyoStore.appendChild(total);
  }
};
tokyo.getCookieSalesPerHour();
tokyo.renderList();

//Dubai store
const dubaiStore = document.getElementById('dubaiList');
dubaiStore.textContent = 'Dubai';

let dubai = {
  name: 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
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
      this.totalPerDay += this.soldEachHour[i];
    }
  },

  renderList: function () {
    let listItem;
    for (let i = 0; i < this.soldEachHour.length; i++) {
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.soldEachHour[i]} cookies`;
      dubaiStore.appendChild(listItem);
    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalPerDay} cookies`;
    dubaiStore.appendChild(total);
  }
};
dubai.getCookieSalesPerHour();
dubai.renderList();

//Paris store
const parisStore = document.getElementById('parisList');
parisStore.textContent = 'Paris';

let paris = {
  name: 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
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
      this.totalPerDay += this.soldEachHour[i];
    }
  },

  renderList: function () {
    let listItem;
    for (let i = 0; i < this.soldEachHour.length; i++) {
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.soldEachHour[i]} cookies`;
      parisStore.appendChild(listItem);
    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalPerDay} cookies`;
    parisStore.appendChild(total);
  }
};
paris.getCookieSalesPerHour();
paris.renderList();

//Lima store
const limaStore = document.getElementById('limaList');
limaStore.textContent = 'Lima';

let lima = {
  name: 'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
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
      this.totalPerDay += this.soldEachHour[i];
    }
  },

  renderList: function () {
    let listItem;
    for (let i = 0; i < this.soldEachHour.length; i++) {
      listItem = document.createElement('li');
      listItem.textContent = `${hours[i]}: ${this.soldEachHour[i]} cookies`;
      limaStore.appendChild(listItem);
    }
    let total = document.createElement('li');
    total.textContent = `Total: ${this.totalPerDay} cookies`;
    limaStore.appendChild(total);
  }
};
lima.getCookieSalesPerHour();
lima.renderList();
