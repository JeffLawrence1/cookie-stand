'use strict';

/* <article id="first">
<h2>First and Pike</h2>
<ul>
  <li>cookies per hour</li>
  <li>cookies per hour</li>
  <li>cookies per hour</li>

</ul>
</article> */


var renderStore = function(salesListElement){
  // console.log(salesListElement);
  var article = document.createElement('article');
  article.setAttribute('id', `${this.name.toLowerCase().replace(' ', '')}`);
  // article.setAttribute('id', 'first');
  salesListElement.appendChild(article);
  // 2: create element
  var h2 = document.createElement('h2');
  // 3: give element content
  h2.textContent = this.name;
  // 4: append to document
  article.appendChild(h2);
  // creating daily output list
  var ul = document.createElement('ul');
  ul.setAttribute('class', 'unorder');
  article.appendChild(ul);
  // adding to list
  // var storeList = this.name;

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
    li.textContent = time + storeList[0].cookieArr[i] + ' cookies';
    ul.appendChild(li);
  }
  var sum = 0;
  for(var i = 0; i < 15; i++){
    sum += storeList[0].cookieArr[i];
  }
  li.textContent = 'Total: ' + sum;
  ul.appendChild(li);

};

//constructor function --- make sure to use a capitol letter to start name
var StoreConstructor = function(name, minimumCustomers, maximumCustomers, averageCookieSale){
  this.name = name;
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomers = maximumCustomers;
  this. averageCookieSale = averageCookieSale;

  storeList.push(this);
};

//function constructor functions
StoreConstructor.prototype.hourlyCookies = function(){
  var spread = this.maximumCustomers - this.minimumCustomers;

  var daily = [];
  for(var i = 0; i < 15; i++){
    var avgCustomers = Math.floor((Math.random() * spread) + this.minimumCustomers);
    var avg = avgCustomers * this.averageCookieSale;
    var temp = Math.ceil(avg);
    daily.push(temp);
  }
  this.cookieArr = daily;
  // console.log(this.cookieArr);
  // return daily;
};


// StoreConstructor.prototype.dailyCookies = function(){
//   var daily = [];
//   for(var i = 0; i < 15; i++){
//     // added math ceiling cause were not selling partial cookies here
//     var temp = Math.ceil(this.hourlyCookies());
//     daily.push(temp);
//   }
//   return daily;
// };

//array of stores
var storeList = [];
console.log(storeList);
//var cookieArr = StoreConstructor.hourlyCookies();
// console.log(cookieArr);
//Rendering the store
StoreConstructor.prototype.renderPage = renderStore;

// 1: Get the parent element to add content
var salesListElement = document.getElementById('middle');

//creating store objects
var firstAndPike = new StoreConstructor('First and Pike', 23, 65, 6.3);
var seatacAirport = new StoreConstructor('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new StoreConstructor('Seattle Center', 11, 38, 3.7);
var capitolHill = new StoreConstructor('Capitol Hill', 20, 38, 2.3);
var alki = new StoreConstructor('Alki', 2, 16, 4.6);

firstAndPike.hourlyCookies();
seatacAirport.hourlyCookies();
seattleCenter.hourlyCookies();
capitolHill.hourlyCookies();
alki.hourlyCookies();

// console.log(firstAndPike);


for(var i = 0; i < storeList.length; i++){
  storeList[i].renderPage(salesListElement);
}


// var alki = {
//   name: 'Alki',
//   minimumCustomers: 2,
//   maximumCustomers: 16,
//   averageCookieSale: 4.6,
//   hourlyCookies: function(){
//     var spread = this.maximumCustomers - this.minimumCustomers;
//     // console.log(spread);
//     var avgCustomers = Math.floor((Math.random() * spread) + this.minimumCustomers);
//     var avg = avgCustomers * this.averageCookieSale;
//     // console.log(avgCustomers);
//     // console.log(avg);
//     return avg;
//   },
//   dailyCookies: function(){
//     var daily = [];
//     for(var i = 0; i < 15; i++){
//       // added math ceiling cause were not selling partial cookies here
//       var temp = Math.ceil(this.hourlyCookies());
//       daily.push(temp);
//     }
//     // console.log(daily);
//     return daily;
//   },

// };

// alki.hourlyCookies();
// var cookieArr = alki.dailyCookies();

// console.log(cookieArr);

// // 1: Get the parent element to add content

// var salesListElement = document.getElementById('middle');
// // console.log(salesListElement);

// var article = document.createElement('article');
// // article.setAttribute('id', `${alki.name.toLowerCase()}`);
// article.setAttribute('id', 'alki');
// salesListElement.appendChild(article);

// // 2: create element

// var h2 = document.createElement('h2');

// // 3: give element content
// h2.textContent = alki.name;

// // 4: append to document
// article.appendChild(h2);

// // creating daily output list
// var ul = document.createElement('ul');
// ul.setAttribute('class', 'unorder');
// article.appendChild(ul);

// // adding to list
// for(var i = 0; i < 15; i ++){
//   var li = document.createElement('li');
//   var time = '';
//   if( i < 6){
//     time = i + 6 + 'am: ';
//   }else if(i === 6){
//     time = 12 + 'pm: ';
//   }else{
//     time = i - 6 + 'pm: ';
//   }
//   li.textContent = time + cookieArr[i] + ' cookies';
//   ul.appendChild(li);
// }
// sum = 0;
// for(var i = 0; i < 15; i++){
//   sum += cookieArr[i];
// }
// li.textContent = 'Total: ' + sum;
// ul.appendChild(li);
