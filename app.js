'use strict';
const Seattle = {
  name: 'Seattle',
  minc: 23,
  maxc: 65,
  avgCookie: 6.3,
  sum: 0,
  cookiesale: [],
  cup: [],
  random: function() {
    return generateRandomNumber(this.minc, this.maxc);
  },
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  render: function() {
    const parentElement = document.getElementById('ss');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
    articleElement.textContent = 'im yousef';

    const h2Element = document.createElement('h2');
    parentElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const pElement = document.createElement('p');
    parentElement.appendChild(pElement);
    pElement.textContent = 'salmon is good';

    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for(let i = 0; i < this.time.length; i++) {
      let b =this.random();
      this.cup.push(Math.ceil(b));
      let a = b*this.avgCookie;
      a= Math.ceil(a);
      this.cookiesale.push(a);
      this.sum += a;
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.time[0]}: ${a} cookies`;
    }
    const total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    ulElement.appendChild(total);
  }
};
Seattle.render();
function generateRandomNumber(min, max) {
  return Math.ceil(Math.random() * (max - min + 1) + min);
}
const a = {
  name: 'Tokyo',
  minc: 3,
  maxc: 24,
  avgCookie: 1.2,
  sum: 0,
  cookiesale: [],
  cup: [],
  random: function() {
    return generateRandomNumber(this.minc, this.maxc);
  },
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  render: function() {
    const parentElement = document.getElementById('ss');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
    articleElement.textContent = 'im yousef';

    const h2Element = document.createElement('h2');
    parentElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const pElement = document.createElement('p');
    parentElement.appendChild(pElement);
    pElement.textContent = 'salmon is good';

    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for(let i = 0; i < this.time.length; i++) {
      let b =this.random();
      this.cup.push(Math.ceil(b));
      let a = b*this.avgCookie;
      a= Math.ceil(a);
      this.cookiesale.push(a);
      this.sum += a;
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.time[0]}: ${a} cookies`;
    }
    const total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    ulElement.appendChild(total);
  }
};
a.render();

const b = {
  name: 'Dubaio',
  minc: 11,
  maxc: 38,
  avgCookie: 3.7,
  sum: 0,
  cookiesale: [],
  cup: [],
  random: function() {
    return generateRandomNumber(this.minc, this.maxc);
  },
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  render: function() {
    const parentElement = document.getElementById('ss');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
    articleElement.textContent = 'im yousef';

    const h2Element = document.createElement('h2');
    parentElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const pElement = document.createElement('p');
    parentElement.appendChild(pElement);
    pElement.textContent = 'salmon is good';

    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for(let i = 0; i < this.time.length; i++) {
      let b =this.random();
      this.cup.push(Math.ceil(b));
      let a = b*this.avgCookie;
      a= Math.ceil(a);
      this.cookiesale.push(a);
      this.sum += a;
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.time[0]}: ${a} cookies`;
    }
    const total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    ulElement.appendChild(total);
  }
};
b.render();

const c = {
  name: 'Pariso',
  minc: 20,
  maxc: 38,
  avgCookie: 2.3,
  sum: 0,
  cookiesale: [],
  cup: [],
  random: function() {
    return generateRandomNumber(this.minc, this.maxc);
  },
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  render: function() {
    const parentElement = document.getElementById('ss');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
    articleElement.textContent = 'im yousef';

    const h2Element = document.createElement('h2');
    parentElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const pElement = document.createElement('p');
    parentElement.appendChild(pElement);
    pElement.textContent = 'salmon is good';

    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for(let i = 0; i < this.time.length; i++) {
      let b =this.random();
      this.cup.push(Math.ceil(b));
      let a = b*this.avgCookie;
      a= Math.ceil(a);
      this.cookiesale.push(a);
      this.sum += a;
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.time[0]}: ${a} cookies`;
    }
    const total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    ulElement.appendChild(total);
  }
};
c.render();

const d = {
  name: 'Lima',
  minc: 2,
  maxc: 4.6,
  avgCookie: 2.3,
  sum: 0,
  cookiesale: [],
  cup: [],
  random: function() {
    return generateRandomNumber(this.minc, this.maxc);
  },
  time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'],
  render: function() {
    const parentElement = document.getElementById('ss');

    const articleElement = document.createElement('article');
    parentElement.appendChild(articleElement);
    articleElement.textContent = 'im yousef';

    const h2Element = document.createElement('h2');
    parentElement.appendChild(h2Element);
    h2Element.textContent = this.name;

    const pElement = document.createElement('p');
    parentElement.appendChild(pElement);
    pElement.textContent = 'salmon is good';

    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for(let i = 0; i < this.time.length; i++) {
      let b =this.random();
      this.cup.push(Math.ceil(b));
      let a = b*this.avgCookie;
      a= Math.ceil(a);
      this.cookiesale.push(a);
      this.sum += a;
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = `${this.time[0]}: ${a} cookies`;
    }
    const total = document.createElement('li');
    total.textContent = `Total: ${this.sum} cookies`;
    ulElement.appendChild(total);
  }
};
d.render();

