'use strict';

/* <article id="first">
<h2>First and Pike</h2>
<ul>
  <li>cookies per hour</li>
  <li>cookies per hour</li>
  <li>cookies per hour</li>

</ul>
</article> */

/* <table>
      <tr>
        <th></th>
        <th>6:00am</th>
        <th>7:00am</th>
      </tr>
      <tr>
        <td>First and Pike</td>
        <td>cookies</td>
        <td>5fdsfdf0</td>
      </tr>
      <tr>
        <td>Seatac</td>
        <td>Jsdfsackson</td>
        <td>9sdf4</td>
      </tr>
      <tr>
        <td>Seattle</td>
        <td>Dsdfsoe</td>
        <td>8sdf0</td>
      </tr>
    </table> */
// 1: Get the parent element to add content
var salesListElement = document.getElementById('middle');
// var tableElement = document.getElementById('middle');
console.log(salesListElement);

var renderTable = function(salesListElement){
  var table = document.createElement('table');
  console.log(salesListElement);
  table.setAttribute('id', 'table');
  salesListElement.appendChild(table);
  var tableHead = document.createElement('thead');
  table.appendChild(tableHead);
  var tableRow = document.createElement('tr');
  tableHead.appendChild(tableRow);
  // var tableHead2 = document.createElement('th');
  // tableRow.appendChild(tableHead2);
  for(var i = 0; i < 15; i++){
    var th = document.createElement('th');
    var time = '';
    if( i < 6){
      time = i + 6 + 'am: ';
    }else if(i === 6){
      time = 12 + 'pm: ';
    }else{
      time = i - 6 + 'pm: ';
    }
    th.textContent = time;
    tableRow.appendChild(th);
  }
  var tableBody = document.createElement('tbody');
  tableBody.setAttribute('id','body');
  table.appendChild(tableBody);
  var tablefoot = document.createElement('tfoot');
  tablefoot.setAttribute('id', 'foot');
  table.appendChild(tablefoot);
};
renderTable(salesListElement);
// var salesListElement = document.getElementById('middle');
var tableElement = document.getElementById('body');
console.log(tableElement);

var addStore = function(tableElement){
  var tr = document.createElement('tr');
  tableElement.appendChild(tr);
  var td = document.createElement('tr');
  tr.textContent = this.name;
  tr.appendChild(td);

};
// addStore(tableElement);
// var renderStore = function(salesListElement){
//   console.log(salesListElement);


//   var article = document.createElement('article');
//   article.setAttribute('id', `${this.name.toLowerCase().replace(' ', '')}`);
//   // article.setAttribute('id', 'first');
//   salesListElement.appendChild(article);
//   // 2: create element
//   var h2 = document.createElement('h2');
//   // 3: give element content
//   h2.textContent = this.name;
//   // 4: append to document
//   article.appendChild(h2);
//   // creating daily output list
//   var ul = document.createElement('ul');
//   ul.setAttribute('class', 'unorder');
//   article.appendChild(ul);
//   // adding to list


//   for(var i = 0; i < 15; i++){
//     var li = document.createElement('li');
//     var time = '';
//     if( i < 6){
//       time = i + 6 + 'am: ';
//     }else if(i === 6){
//       time = 12 + 'pm: ';
//     }else{
//       time = i - 6 + 'pm: ';
//     }
//     li.textContent = time + this.cookieArr[i] + ' cookies';
//     ul.appendChild(li);
//   }
//   var sum = 0;
//   for(var i = 0; i < 15; i++){
//     sum += this.cookieArr[i];
//   }
//   li.textContent = 'Total: ' + sum;
//   ul.appendChild(li);

// };

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

//array of stores
var storeList = [];
// console.log(storeList);
//var cookieArr = StoreConstructor.hourlyCookies();
// console.log(cookieArr);


//Rendering the store uncomment below to make work again
// StoreConstructor.prototype.renderPage = renderStore;
StoreConstructor.prototype.renderPage = addStore;


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
// console.log(this.storeList);

// for(var i = 0; i < storeList.length; i++){
//   storeList[i].renderPage(salesListElement);
// }
for(var i = 0; i < storeList.length; i++){
  storeList[i].renderPage(tableElement);
}

