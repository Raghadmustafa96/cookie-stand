'use strict';

var working_hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var storeLocationNameList = ['Seattle','Tokyo','Dubai','Paris','Lima'];
var minCustomerPerHourList = [23,3,11,20,2];
var maxCustomerPerHourList = [65,24,38,38,16];
var averageCookiesHourList = [6.3,1.2,3.7,2.3,4.6];
var contentDiv,salesArticle,salesTable,tableHeading,totalColumn,sumTotal;
var sumOfTotal = [];


var allStoreLocation = [];

function StoreLocation(storeLocationName,minCustomerPerHour,maxCustomerPerHour,averageCookiesHour){
  this.storeLocationName = storeLocationName;
  this.minCustomerPerHour = minCustomerPerHour;
  this.maxCustomerPerHour = maxCustomerPerHour;
  this.averageCookiesHour = averageCookiesHour;
  this.customerPerHour = [];
  this.cookiesPerHour = [];
  allStoreLocation.push(this);
}

StoreLocation.prototype.calculateCustomerPerHour = function(){
  for(var i=0; i < working_hours.length ; i++){
    this.customerPerHour.push(Math.floor(Math.random()*(this.maxCustomerPerHour - this.minCustomerPerHour +1)+ this.minCustomerPerHour));
  }
};

StoreLocation.prototype.calculateCookiesPerHour = function(){
  for(var i=0; i < working_hours.length ; i++){
    this.cookiesPerHour.push(Math.floor(this.customerPerHour[i] * this.averageCookiesHour));
  }
};

StoreLocation.prototype.render = function(){
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
      totalColumn[i] = totalColumn[i] + this.cookiesPerHour[i];
    }
  }
  sumOfTotal.push(DailyLocationTotal);
  var DailyLocationTotalData = document.createElement('td');
  DailyLocationTotalData.textContent = DailyLocationTotal;
  storeLocationRow.appendChild(DailyLocationTotalData);
};

function creatTable() {
  contentDiv = document.getElementById('Sales');
  salesArticle = document.createElement('article');
  contentDiv.appendChild(salesArticle);
  tableHeading = document.createElement('h1');
  tableHeading.textContent = 'Daily Sales Table';
  salesArticle.appendChild(tableHeading);
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


var totalRow;
function footerRow() {

  totalRow = document.createElement('tr');
  salesTable.appendChild(totalRow);

  var totalCell = document.createElement('th');
  totalCell.textContent = 'total';
  totalRow.appendChild(totalCell);

  var coloumTotalCell;
  for(var j=0 ; j<working_hours.length ; j++){
    coloumTotalCell = document.createElement('th');
    totalRow.appendChild(coloumTotalCell);
    coloumTotalCell.textContent = totalColumn[j];
  }
  sumTotal = 0;
  for(var i =0 ; i< storeLocationNameList.length;i++){
    sumTotal = sumTotal + sumOfTotal[i];
  }

  var sumTotaldata = document.createElement('td');
  sumTotaldata.textContent = sumTotal;
  totalRow.appendChild(sumTotaldata);
  console.log(sumTotal);
}

//.................................................... start code

totalColumn = [];
for(var i=0 ; i< working_hours.length;i++){
  totalColumn.push(0);
}

creatTable();

headerRow();

// Seattle
var Seattle = new StoreLocation(storeLocationNameList[0],minCustomerPerHourList[0],maxCustomerPerHourList[0],averageCookiesHourList[0]);


// Tokyo
var Tokyo = new StoreLocation(storeLocationNameList[1],minCustomerPerHourList[1],maxCustomerPerHourList[1],averageCookiesHourList[1]);

// Dubai
var Dubai = new StoreLocation(storeLocationNameList[2],minCustomerPerHourList[2],maxCustomerPerHourList[2],averageCookiesHourList[2]);


// Paris
var Paris = new StoreLocation(storeLocationNameList[3],minCustomerPerHourList[3],maxCustomerPerHourList[3],averageCookiesHourList[3]);

// Lima
var Lima = new StoreLocation(storeLocationNameList[4],minCustomerPerHourList[4],maxCustomerPerHourList[4],averageCookiesHourList[4]);


var newLocation = document.getElementById('storeLocationForm');

newLocation.addEventListener('submit',locationSubmitter);


function locationSubmitter(event){

  event.preventDefault();

  var locationName = event.target.storeLocationName.value;

  var minCustomerPerHour = event.target.minCustomerPerHour.value;

  var maxCustomerPerHour = event.target.maxCustomerPerHour.value;

  var averageCookiesHour = event.target.averageCookiesHour.value;

  var addedLocationName = new StoreLocation(locationName,minCustomerPerHour,maxCustomerPerHour,averageCookiesHour);

  console.log(addedLocationName);

  salesTable.removeChild(totalRow);

  addedLocationName.calculateCustomerPerHour();
  addedLocationName.calculateCookiesPerHour();
  addedLocationName.render();

  var sum = 0;
  for (var i= 1; i<totalRow.childNodes.length-1;i++){
    totalRow.childNodes[i].textContent = totalColumn[i-1];
    sum = sum + totalColumn[i-1];
  }

  totalRow.childNodes[i].textContent = sum;

  console.log(sumTotal);
  console.log(sum);

  salesTable.appendChild(totalRow);
}


for(var i=0; i<allStoreLocation.length;i++){
  allStoreLocation[i].calculateCustomerPerHour();
  allStoreLocation[i].calculateCookiesPerHour();
  allStoreLocation[i].render();
}

footerRow();
