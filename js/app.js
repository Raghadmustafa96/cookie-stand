'use strict';

var working_hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var storeLocationNameList = ['Seattle','Tokyo','Dubai','Paris','Lima'];
var minCustomerPerHourList = [23,3,11,20,2];
var maxCustomerPerHourList = [65,24,38,38,16];
var averageCookiesHourList = [6.3,1.2,3.7,2.3,4.6];
var contentDiv,salesArticle,salesTable;

function storeLocation(storeLocationName,minCustomerPerHour,maxCustomerPerHour,averageCookiesHour){
  this.storeLocationName = storeLocationName;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.averageCookiesHour = averageCookiesHour;
  this.customerPerHour = [];
  this.cookiesPerHour = [];
}

storeLocation.prototype.calculateCustomerPerHour = function(){
  for(var i=0; i < working_hours.length ; i++){
    this.customerPerHour.push(Math.floor(Math.random()*(this.maxCustomerPerHour - this.minCustomerPerHour +1)+ this.minCustomerPerHour));
  }
};

storeLocation.prototype.calculateCookiesPerHour = function(){
  for(var i=0; i < working_hours.length ; i++){
    this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.averageCookiesHour));
  }
};

storeLocation.prototype.render = function(){
  var DailyLocationTotal = 0;
  var storeLocationRow = document.createElement('tr');
  salesTable.appendChild(storeLocationRow);

  for(var i= -1 ; i<this.cookiesPerHour.length;i++){
    if(i === -1){
      var storeLocationNameData = document.createElement('td');
      storeLocationNameData.textContent = this.storeLocationName;
      storeLocationRow.appendChild(storeLocationNameData);
    } else {
      var cookiesPerHourData = document.createElement('td');
      cookiesPerHourData.textContent = this.cookiesPerHour[i];
      DailyLocationTotal = DailyLocationTotal + this.cookiesPerHour[i];
      storeLocationRow.appendChild(cookiesPerHourData);
    }
  }
  var DailyLocationTotalData = document.createElement('td');
  DailyLocationTotalData.textContent = DailyLocationTotal;
  storeLocationRow.appendChild(DailyLocationTotalData);
};

function creatTable() {
  contentDiv = document.getElementById('Sales');
  salesArticle = document.createElement('article');
  contentDiv.appendChild(salesArticle);
  salesTable = document.createElement('table');
  salesArticle.appendChild(salesTable);
}

function headerRow() {
  var working_hoursRow = document.createElement('tr');
  salesTable.appendChild(working_hoursRow);

  for(var i= -1 ; i< working_hours.length ; i++){
    if(i === -1){
      var emptyHeading = document.createElement('th');
      emptyHeading.textContent = ' ';
      working_hoursRow.appendChild(emptyHeading);
    } else{
      var working_hoursHeading = document.createElement('th');
      working_hoursHeading.textContent = working_hours[i] ;
      working_hoursRow.appendChild(working_hoursHeading);
    }
  }

  var DailyLocationTotalHeading = document.createElement('th');
  DailyLocationTotalHeading.textContent = 'Daily Location Total' ;
  working_hoursRow.appendChild(DailyLocationTotalHeading);
}

function footerRow() {
  var Totals = [];
  for(var i = 0 ; i<working_hours.length;i++ ){
    Totals.push(Seattle.cookiesPerHour[i] + Tokyo.cookiesPerHour[i] + Dubai.cookiesPerHour[i] + Paris.cookiesPerHour[i]+ Lima.cookiesPerHour[i]);
  }

  var TotalRow = document.createElement('tr');
  salesTable.appendChild(TotalRow);

  for( i= -1 ; i<working_hours.length;i++){
    if(i === -1){
      var Totaldata = document.createElement('td');
      Totaldata.textContent = 'Totals';
      TotalRow.appendChild(Totaldata);
    } else {
      Totaldata = document.createElement('td');
      Totaldata.textContent = Totals[i];
      TotalRow.appendChild(Totaldata);
    }
  }
}

//.................................................... start code

creatTable();


// call header row
headerRow();

// Seattle
var Seattle = new storeLocation(storeLocationNameList[0],minCustomerPerHourList[0],maxCustomerPerHourList[0],averageCookiesHourList[0]);
Seattle.calculateCustomerPerHour();
Seattle.calculateCookiesPerHour();
Seattle.render();

// Tokyo
var Tokyo = new storeLocation(storeLocationNameList[1],minCustomerPerHourList[1],maxCustomerPerHourList[1],averageCookiesHourList[1]);
Tokyo.calculateCustomerPerHour();
Tokyo.calculateCookiesPerHour();
Tokyo.render();

// Dubai
var Dubai = new storeLocation(storeLocationNameList[2],minCustomerPerHourList[2],maxCustomerPerHourList[2],averageCookiesHourList[2]);
Dubai.calculateCustomerPerHour();
Dubai.calculateCookiesPerHour();
Dubai.render();

// Paris
var Paris = new storeLocation(storeLocationNameList[3],minCustomerPerHourList[3],maxCustomerPerHourList[3],averageCookiesHourList[3]);
Paris.calculateCustomerPerHour();
Paris.calculateCookiesPerHour();
Paris.render();

// Lima
var Lima = new storeLocation(storeLocationNameList[4],minCustomerPerHourList[4],maxCustomerPerHourList[4],averageCookiesHourList[4]);
Lima.calculateCustomerPerHour();
Lima.calculateCookiesPerHour();
Lima.render();

// call footer row
footerRow();
