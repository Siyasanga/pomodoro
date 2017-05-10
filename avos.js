var avos = [];
function formatData(data) {
  var ArrayData = data.split(', ');
  for(var i=0; i<ArrayData.length; i++){
    var singleData = ArrayData[i].split(" ");
    avos.push({ qty:singleData[0]*1,
      price:singleData[2].substring(1)*1});
  }
  return avos;
}
formatData("1 for R3, 2 for R7, 3 for R10, 5 for R14.50");
/********************************************************/
function cheapestDeal() {
  var min = avos[0].price/avos[0].qty;
  var minIndex = 0;
  for(var i=1; i<avos.length; i++){
    temp = avos[i].price/avos[i].qty;
    if(temp < min){
      minIndex = i; min = temp;
    }
  }
  console.log("*********************************************************");
  console.log("Cheapest deal is: "+avos[minIndex].qty+" for R"+avos[minIndex].price+"\nSince Avarage price for each avocado is: "+min);
  console.log("*********************************************************");
  return avos[minIndex];
}
cheapestDeal();
/*********************************************************/
function expensiveDeal() {
  var max = avos[0].price/avos[0].qty;
  var maxIndex = 0;
  for(var i=1; i<avos.length; i++){
    temp = avos[i].price/avos[i].qty;
    if(temp > max){
      maxIndex = i; max = temp;
    }
  }
  console.log("Expensive deal is: "+avos[maxIndex].qty+" for R"+avos[maxIndex].price+"\nSince Avarage price for each avocado is: "+max);
  console.log("*********************************************************");
  return avos[maxIndex];
}
expensiveDeal();
/*********************************************************/
function averageDeal() {
  var priceSum = 0;
  for(var i=0; i<avos.length; i++){
    priceSum += avos[i].price;
  }
  console.log("Avarage price "+priceSum/avos.length); // finding average
  console.log("*********************************************************");
  return priceSum/avos.length;
}
averageDeal();
module.exports = {
  "formatData":formatData,
  "cheapestDeal":cheapestDeal,
  "expensiveDeal":expensiveDeal,
  "averageDeal":averageDeal
};
