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
      var temp = this.hourlyCookies();
      daily.push(temp);
    }
    // console.log(daily);
    return daily;
  },

};

// firstAndPike.hourlyCookies();
// firstAndPike.dailyCookies();



// 1: Get the parent element to add content

var salesListElement = document.getElementById('middle');
// console.log(salesListElement);

var article = document.createElement('article');
article.setAttribute('id', `${firstAndPike.name.toLowerCase()}`);
salesListElement.appendChild(article);
