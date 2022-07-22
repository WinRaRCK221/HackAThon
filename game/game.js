var energies=10;
var usage=0;
var amtsolar=0;
var loseamount = 3;
var amtclicks;
var rand = Math.random();

function solartimer(){
  energies=energies+amtsolar;  
  updatesolar();
}
setInterval(solartimer,1000)

function updatesolar(){
  document.getElementById('text').value=energies+"J";
  document.getElementById('amountsolar').innerHTML=amtsolar+" solar panels";
  document.getElementById('costsolar').innerHTML=(amtsolar+1)*20 + " Joules";
}
var intervalId = window.setInterval(function surge(){
  var a = Math.random();
  if(a <=.3)
  {
    randomusage();
  }
  document.getElementById('randomsurges').innerHTML="Power usage: "+usage; 
  if(energies <= amtclicks*.20){
    console.log('you lost');
  }
}, 5000);
function add(){
  energies= energies+1;
  amtclicks=amtclicks+1;
  updatesolar();
}
function solarpower(){
  if(energies >= ((amtsolar+1)*20))
  {
    energies = energies-((amtsolar+1)*20);
    amtsolar++;
    energies++;
  }
}
function randomusage(){
  energies = energies - (energies/2);
  usage = usage+1;
}
