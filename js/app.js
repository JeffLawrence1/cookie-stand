'use strict';

/* <article id="first">
<h2>First and Pike</h2>
<ul>
  <li>cookies per hour</li>
  <li>cookies per hour</li>
  <li>cookies per hour</li>

</ul>
</article> */

var firstAndPike = {
  name: 'First and Pike',
  minimumCustomers: 23,
  maximumCustomers: 65,
  averageCookieSale: 6.3,
  hourlyCookies: function(){
    var spread = this.maximumCustomers - this.minimumCustomers;
    // console.log(spread);
    var avgCustomers = Math.floor((Math.random() * spread) + this.minimumCustomers);
    var avg = avgCustomers * this.averageCookieSale;
    // console.log(avgCustomers);
    // console.log(avg);
    return avg;
  },
  dailyCookies: function(){
    var daily = [];
    for(var i = 0; i < 15; i++){
      // added math ceiling cause were not selling partial cookies here
      var temp = Math.ceil(this.hourlyCookies());
      daily.push(temp);
    }
    // console.log(daily);
    return daily;
  },

};

firstAndPike.hourlyCookies();
var cookieArr = firstAndPike.dailyCookies();
console.log(cookieArr);

// 1: Get the parent element to add content

var salesListElement = document.getElementById('middle');
// console.log(salesListElement);

var article = document.createElement('article');
// article.setAttribute('id', `${firstAndPike.name.toLowerCase()}`);
article.setAttribute('id', 'first');
salesListElement.appendChild(article);

// 2: create element

var h2 = document.createElement('h2');

// 3: give element content
h2.textContent = firstAndPike.name;

// 4: append to document
article.appendChild(h2);

// creating daily output list
var ul = document.createElement('ul');
ul.setAttribute('class', 'unorder');
article.appendChild(ul);

// adding to list
for(var i = 0; i < 15; i ++){
  var li = document.createElement('li');
  var time = '';
  if( i < 6){
    time = i + 6 + 'am: ';
  }else if(i === 6){
    time = 12 + 'pm: ';
  }else{
    time = i - 6 + 'pm: ';
  }
  li.textContent = time + cookieArr[i] + ' cookies';
  ul.appendChild(li);
}
var sum = 0;
for(var i = 0; i < 15; i++){ 
  sum += cookieArr[i];
}
li.textContent = 'Total: ' + sum;
ul.appendChild(li);

var seatacAirport = {
  name: 'Seatac Airport',
  minimumCustomers: 3,
  maximumCustomers: 24,
  averageCookieSale: 1.2,
  hourlyCookies: function(){
    var spread = this.maximumCustomers - this.minimumCustomers;
    // console.log(spread);
    var avgCustomers = Math.floor((Math.random() * spread) + this.minimumCustomers);
    var avg = avgCustomers * this.averageCookieSale;
    // console.log(avgCustomers);
    // console.log(avg);
    return avg;
  },
  dailyCookies: function(){
    var daily = [];
    for(var i = 0; i < 15; i++){
      // added math ceiling cause were not selling partial cookies here
      var temp = Math.ceil(this.hourlyCookies());
      daily.push(temp);
    }
    // console.log(daily);
    return daily;
  },

};

seatacAirport.hourlyCookies();
var cookieArr = seatacAirport.dailyCookies();

console.log(cookieArr);

// 1: Get the parent element to add content

var salesListElement = document.getElementById('middle');
// console.log(salesListElement);

var article = document.createElement('article');
// article.setAttribute('id', `${seatacAirport.name.toLowerCase()}`);
article.setAttribute('id', 'seatac');
salesListElement.appendChild(article);

// 2: create element

var h2 = document.createElement('h2');

// 3: give element content
h2.textContent = seatacAirport.name;

// 4: append to document
article.appendChild(h2);

// creating daily output list
var ul = document.createElement('ul');
ul.setAttribute('class', 'unorder');
article.appendChild(ul);


// adding to list
for(var i = 0; i < 15; i ++){
  var li = document.createElement('li');
  var time = '';
  if( i < 6){
    time = i + 6 + 'am: ';
  }else if(i === 6){
    time = 12 + 'pm: ';
  }else{
    time = i - 6 + 'pm: ';
  }
  li.textContent = time + cookieArr[i] + ' cookies';
  ul.appendChild(li);
}
sum = 0;
for(var i = 0; i < 15; i++){ 
  sum += cookieArr[i];
}
li.textContent = 'Total: ' + sum;
ul.appendChild(li);

var seattleCenter = {
  name: 'Seattle Center',
  minimumCustomers: 11,
  maximumCustomers: 38,
  averageCookieSale: 3.7,
  hourlyCookies: function(){
    var spread = this.maximumCustomers - this.minimumCustomers;
    // console.log(spread);
    var avgCustomers = Math.floor((Math.random() * spread) + this.minimumCustomers);
    var avg = avgCustomers * this.averageCookieSale;
    // console.log(avgCustomers);
    // console.log(avg);
    return avg;
  },
  dailyCookies: function(){
    var daily = [];
    for(var i = 0; i < 15; i++){
      // added math ceiling cause were not selling partial cookies here
      var temp = Math.ceil(this.hourlyCookies());
      daily.push(temp);
    }
    // console.log(daily);
    return daily;
  },

};

seattleCenter.hourlyCookies();
var cookieArr = seattleCenter.dailyCookies();

console.log(cookieArr);

// 1: Get the parent element to add content

var salesListElement = document.getElementById('middle');
// console.log(salesListElement);

var article = document.createElement('article');
// article.setAttribute('id', `${seattleCenter.name.toLowerCase()}`);
article.setAttribute('id', 'seattle');
salesListElement.appendChild(article);

// 2: create element

var h2 = document.createElement('h2');

// 3: give element content
h2.textContent = seattleCenter.name;

// 4: append to document
article.appendChild(h2);

// creating daily output list
var ul = document.createElement('ul');
ul.setAttribute('class', 'unorder');
article.appendChild(ul);

// adding to list
for(var i = 0; i < 15; i ++){
  var li = document.createElement('li');
  var time = '';
  if( i < 6){
    time = i + 6 + 'am: ';
  }else if(i === 6){
    time = 12 + 'pm: ';
  }else{
    time = i - 6 + 'pm: ';
  }
  li.textContent = time + cookieArr[i] + ' cookies';
  ul.appendChild(li);
}
sum = 0;
for(var i = 0; i < 15; i++){ 
  sum += cookieArr[i];
}
li.textContent = 'Total: ' + sum;
ul.appendChild(li);

var capitolHill = {
  name: 'Capitol Hill',
  minimumCustomers: 20,
  maximumCustomers: 38,
  averageCookieSale: 2.3,
  hourlyCookies: function(){
    var spread = this.maximumCustomers - this.minimumCustomers;
    // console.log(spread);
    var avgCustomers = Math.floor((Math.random() * spread) + this.minimumCustomers);
    var avg = avgCustomers * this.averageCookieSale;
    // console.log(avgCustomers);
    // console.log(avg);
    return avg;
  },
  dailyCookies: function(){
    var daily = [];
    for(var i = 0; i < 15; i++){
      // added math ceiling cause were not selling partial cookies here
      var temp = Math.ceil(this.hourlyCookies());
      daily.push(temp);
    }
    // console.log(daily);
    return daily;
  },

};

capitolHill.hourlyCookies();
var cookieArr = capitolHill.dailyCookies();

console.log(cookieArr);

// 1: Get the parent element to add content

var salesListElement = document.getElementById('middle');
// console.log(salesListElement);

var article = document.createElement('article');
// article.setAttribute('id', `${capitolHill.name.toLowerCase()}`);
article.setAttribute('id', 'capitol');
salesListElement.appendChild(article);

// 2: create element

var h2 = document.createElement('h2');

// 3: give element content
h2.textContent = capitolHill.name;

// 4: append to document
article.appendChild(h2);

// creating daily output list
var ul = document.createElement('ul');
ul.setAttribute('class', 'unorder');
article.appendChild(ul);

// adding to list
for(var i = 0; i < 15; i ++){
  var li = document.createElement('li');
  var time = '';
  if( i < 6){
    time = i + 6 + 'am: ';
  }else if(i === 6){
    time = 12 + 'pm: ';
  }else{
    time = i - 6 + 'pm: ';
  }
  li.textContent = time + cookieArr[i] + ' cookies';
  ul.appendChild(li);
}
sum = 0;
for(var i = 0; i < 15; i++){ 
  sum += cookieArr[i];
}
li.textContent = 'Total: ' + sum;
ul.appendChild(li);

var alki = {
  name: 'Alki',
  minimumCustomers: 2,
  maximumCustomers: 16,
  averageCookieSale: 4.6,
  hourlyCookies: function(){
    var spread = this.maximumCustomers - this.minimumCustomers;
    // console.log(spread);
    var avgCustomers = Math.floor((Math.random() * spread) + this.minimumCustomers);
    var avg = avgCustomers * this.averageCookieSale;
    // console.log(avgCustomers);
    // console.log(avg);
    return avg;
  },
  dailyCookies: function(){
    var daily = [];
    for(var i = 0; i < 15; i++){
      // added math ceiling cause were not selling partial cookies here
      var temp = Math.ceil(this.hourlyCookies());
      daily.push(temp);
    }
    // console.log(daily);
    return daily;
  },

};

alki.hourlyCookies();
var cookieArr = alki.dailyCookies();

console.log(cookieArr);

// 1: Get the parent element to add content

var salesListElement = document.getElementById('middle');
// console.log(salesListElement);

var article = document.createElement('article');
// article.setAttribute('id', `${alki.name.toLowerCase()}`);
article.setAttribute('id', 'alki');
salesListElement.appendChild(article);

// 2: create element

var h2 = document.createElement('h2');

// 3: give element content
h2.textContent = alki.name;

// 4: append to document
article.appendChild(h2);

// creating daily output list
var ul = document.createElement('ul');
ul.setAttribute('class', 'unorder');
article.appendChild(ul);

// adding to list
for(var i = 0; i < 15; i ++){
  var li = document.createElement('li');
  var time = '';
  if( i < 6){
    time = i + 6 + 'am: ';
  }else if(i === 6){
    time = 12 + 'pm: ';
  }else{
    time = i - 6 + 'pm: ';
  }
  li.textContent = time + cookieArr[i] + ' cookies';
  ul.appendChild(li);
}
sum = 0;
for(var i = 0; i < 15; i++){ 
  sum += cookieArr[i];
}
li.textContent = 'Total: ' + sum;
ul.appendChild(li);