var wrapperEle =document.body.querySelector(".wrapper");

var headTwoEle =document.body.querySelector(".headTwo");
var headTwoEle2 =document.body.querySelector(".headTwo2");
var headTwoEle3 =document.body.querySelector(".headTwo3");
var headTwoEle4 =document.body.querySelector(".headTwo4");
var buttonEle =document.body.querySelector(".editButton");
var ageEle =document.body.querySelector(".ageButton");


function rewriteFunction(){
  var inputMile = Number(prompt("Approximately how many miles do you drive a year?"));
   var inputGas = Number(prompt("What is the current cost of gas in your area?"));
  gas=inputGas
  
  writerFunction(inputMile,inputGas);
}


function writerFunction(Mile,gas){
  headTwoEle.innerHTML="To drive a car with an MPG rating of "+12+" for "+Mile+" miles at "+gas+" would cost "+Mile/12*gas;
  headTwoEle2.innerHTML="To drive a car with an MPG rating of "+17+" for "+Mile+" miles at "+gas+" would cost "+Mile/17*gas;
  headTwoEle3.innerHTML="To drive a car with an MPG rating of "+26+" for "+Mile+" miles at "+gas+" would cost "+Mile/26*gas;
  headTwoEle4.innerHTML="To drive a car with an MPG rating of "+29+" for "+Mile+" miles at "+gas+" would cost "+Mile/29*gas;
  
 
  
}



buttonEle.addEventListener("click", function(){
  rewriteFunction();
})