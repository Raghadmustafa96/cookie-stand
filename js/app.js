'use strict';

var working_hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

//......................................... Seattle

var Seattle = {
  name: 'Seattle',
  minCustomerPerHour: 23,
  maxCustomerPerHour: 65,
  averageCookiesHour: 6.3,
  customerPerHour:[],
  cookiesPerHour:[],

  calculateCustomerPerHour: function(){
    for(var i=0; i < working_hours.length ; i++){
      this.customerPerHour.push(Math.floor(Math.random()*(this.maxCustomerPerHour - this.minCustomerPerHour +1)+ this.minCustomerPerHour));
    }
  },

  calculateCookiesPerHour: function(){
    for(var i=0; i < working_hours.length ; i++){
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.averageCookiesHour));
    }
  }
};

Seattle.calculateCustomerPerHour();
Seattle.calculateCookiesPerHour();

var seattleDiv = document.getElementById('Sales');

var seattleArticle = document.createElement('article');
seattleDiv.appendChild(seattleArticle);

var seattleHeader = document.createElement('h2');
seattleHeader.textContent = Seattle.name;
seattleArticle.appendChild(seattleHeader);


var seattleList = document.createElement('ul');
seattleArticle.appendChild(seattleList);

var sumCookies = 0;

for(var i=0 ; i < working_hours.length ; i++){
  var cookiesPerHourList = document.createElement('li');
  cookiesPerHourList.textContent = working_hours[i] +':' +Seattle.cookiesPerHour[i]+ ' cookies';
  seattleList.appendChild(cookiesPerHourList);
  sumCookies = sumCookies + Seattle.cookiesPerHour[i];
  if(i=== working_hours.length-1)
  {
    cookiesPerHourList = document.createElement('li');
    cookiesPerHourList.textContent = 'Total' +':' +sumCookies+ ' cookies';
    seattleList.appendChild(cookiesPerHourList);
  }
}

//......................................... Tokyo


var Tokyo = {
  name:'Tokyo',
  minCustomerPerHour: 3,
  maxCustomerPerHour: 24,
  averageCookiesHour: 1.2,
  customerPerHour:[],
  cookiesPerHour:[],

  calculateCustomerPerHour: function(){
    for(var i=0; i < working_hours.length ; i++){
      this.customerPerHour.push(Math.floor(Math.random()*(this.maxCustomerPerHour - this.minCustomerPerHour +1)+ this.minCustomerPerHour));
    }
    console.log(this.customerPerHour);
  },

  calculateCookiesPerHour: function(){
    for(var i=0; i < working_hours.length ; i++){
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.averageCookiesHour));
    }
    console.log(this.cookiesPerHour);
  }
};

Tokyo.calculateCustomerPerHour();
Tokyo.calculateCookiesPerHour();

var TokyoArticle = document.createElement('article');
seattleDiv.appendChild(TokyoArticle);

var TokyoHeader = document.createElement('h2');
TokyoHeader.textContent = Tokyo.name;
TokyoArticle.appendChild(TokyoHeader);


var TokyoList = document.createElement('ul');
TokyoArticle.appendChild(TokyoList);

var tokyoSumCookies = 0;

for(var i=0 ; i < working_hours.length ; i++){
  cookiesPerHourList = document.createElement('li');
  cookiesPerHourList.textContent = working_hours[i] +':' +Tokyo.cookiesPerHour[i]+ ' cookies';
  TokyoList.appendChild(cookiesPerHourList);
  tokyoSumCookies = tokyoSumCookies + Tokyo.cookiesPerHour[i];
  if(i=== working_hours.length-1)
  {
    cookiesPerHourList = document.createElement('li');
    cookiesPerHourList.textContent = 'Total' +':' +tokyoSumCookies+ ' cookies';
    TokyoList.appendChild(cookiesPerHourList);
  }
}


//........................................Dubai


var Dubai = {
  name:'Dubai',
  minCustomerPerHour: 11,
  maxCustomerPerHour: 38,
  averageCookiesHour: 3.7,
  customerPerHour:[],
  cookiesPerHour:[],

  calculateCustomerPerHour: function(){
    for(var i=0; i < working_hours.length ; i++){
      this.customerPerHour.push(Math.floor(Math.random()*(this.maxCustomerPerHour - this.minCustomerPerHour +1)+ this.minCustomerPerHour));
    }
    console.log(this.customerPerHour);
  },

  calculateCookiesPerHour: function(){
    for(var i=0; i < working_hours.length ; i++){
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.averageCookiesHour));
    }
    console.log(this.cookiesPerHour);
  }
};

Dubai.calculateCustomerPerHour();
Dubai.calculateCookiesPerHour();

var DubaiArticle = document.createElement('article');
seattleDiv.appendChild(DubaiArticle);

var DubaiHeader = document.createElement('h2');
DubaiHeader.textContent = Dubai.name;
DubaiArticle.appendChild(DubaiHeader);


var DubaiList = document.createElement('ul');
DubaiArticle.appendChild(DubaiList);

var DubaiSumCookies = 0;

for(var i=0 ; i < working_hours.length ; i++){
  cookiesPerHourList = document.createElement('li');
  cookiesPerHourList.textContent = working_hours[i] +':' +Dubai.cookiesPerHour[i]+ ' cookies';
  DubaiList.appendChild(cookiesPerHourList);
  DubaiSumCookies = DubaiSumCookies + Dubai.cookiesPerHour[i];
  if(i=== working_hours.length-1)
  {
    cookiesPerHourList = document.createElement('li');
    cookiesPerHourList.textContent = 'Total' +':' +DubaiSumCookies+ ' cookies';
    DubaiList.appendChild(cookiesPerHourList);
  }
}


//........................................ Paris


var Paris = {
  name:'Paris',
  minCustomerPerHour: 20,
  maxCustomerPerHour: 38,
  averageCookiesHour: 2.3,
  customerPerHour:[],
  cookiesPerHour:[],

  calculateCustomerPerHour: function(){
    for(var i=0; i < working_hours.length ; i++){
      this.customerPerHour.push(Math.floor(Math.random()*(this.maxCustomerPerHour - this.minCustomerPerHour +1)+ this.minCustomerPerHour));
    }
    console.log(this.customerPerHour);
  },

  calculateCookiesPerHour: function(){
    for(var i=0; i < working_hours.length ; i++){
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.averageCookiesHour));
    }
    console.log(this.cookiesPerHour);
  }
};

Paris.calculateCustomerPerHour();
Paris.calculateCookiesPerHour();

var ParisArticle = document.createElement('article');
seattleDiv.appendChild(ParisArticle);

var ParisHeader = document.createElement('h2');
ParisHeader.textContent = Paris.name;
ParisArticle.appendChild(ParisHeader);

var ParisList = document.createElement('ul');
ParisArticle.appendChild(ParisList);

var ParisSumCookies = 0;

for(var i=0 ; i < working_hours.length ; i++){
  cookiesPerHourList = document.createElement('li');
  cookiesPerHourList.textContent = working_hours[i] +':' +Paris.cookiesPerHour[i]+ ' cookies';
  ParisList.appendChild(cookiesPerHourList);
  ParisSumCookies = ParisSumCookies + Paris.cookiesPerHour[i];
  if(i=== working_hours.length-1)
  {
    cookiesPerHourList = document.createElement('li');
    cookiesPerHourList.textContent = 'Total' +':' +ParisSumCookies+ ' cookies';
    ParisList.appendChild(cookiesPerHourList);
  }
}


//........................................ Lima

var Lima = {
  name: 'Lima',
  minCustomerPerHour: 2,
  maxCustomerPerHour: 16,
  averageCookiesHour: 4.6,
  customerPerHour:[],
  cookiesPerHour:[],

  calculateCustomerPerHour: function(){
    for(var i=0; i < working_hours.length ; i++){
      this.customerPerHour.push(Math.floor(Math.random()*(this.maxCustomerPerHour - this.minCustomerPerHour +1)+ this.minCustomerPerHour));
    }
    console.log(this.customerPerHour);
  },

  calculateCookiesPerHour: function(){
    for(var i=0; i < working_hours.length ; i++){
      this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.averageCookiesHour));
    }
    console.log(this.cookiesPerHour);
  }
};

Lima.calculateCustomerPerHour();
Lima.calculateCookiesPerHour();

var LimaArticle = document.createElement('article');
seattleDiv.appendChild(LimaArticle);

var LimaHeader = document.createElement('h2');
LimaHeader.textContent = Lima.name;
LimaArticle.appendChild(LimaHeader);

var LimaList = document.createElement('ul');
LimaArticle.appendChild(LimaList);

var LimaSumCookies = 0;

for(var i=0 ; i < working_hours.length ; i++){
  cookiesPerHourList = document.createElement('li');
  cookiesPerHourList.textContent = working_hours[i] +':' +Lima.cookiesPerHour[i]+ ' cookies';
  LimaList.appendChild(cookiesPerHourList);
  LimaSumCookies = LimaSumCookies + Lima.cookiesPerHour[i];
  if(i=== working_hours.length-1)
  {
    cookiesPerHourList = document.createElement('li');
    cookiesPerHourList.textContent = 'Total' +':' +LimaSumCookies+ ' cookies';
    LimaList.appendChild(cookiesPerHourList);
  }
}
