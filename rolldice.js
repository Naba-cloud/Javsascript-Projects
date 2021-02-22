 var scores=[0,0];
 var roundscore,activeplayer,dice,gameplaying;
 var arr=[];
//  gameplaying=true;

// activeplayer=1;
// dice=Math.floor(Math.random(dice)*6)+1;
// document.querySelector('#current-'+activeplayer).textContent=dice;
// var a=document.querySelector('#current-'+activeplayer).textContent;
// var sum=0;


// document.querySelector('.dice').style.display='none';
roundscore=0;
activeplayer=0;
gameplaying=true;
function roll()
{
  
  document.querySelector('#name-'+activeplayer).textContent='Player';
 
  
  dice=Math.floor(Math.random(dice)*6)+1;
 
 
 var diceDom=document.querySelector('.dice');
diceDom.style.display='block';
diceDom.src='dice-'+dice+'.png';
// if(dice==6)
// {
//     // var x=Math.floor(Math.random()*6)+1;
// var x=6;
// if(x==6)
// {
//   arr.push(x)
//    if(arr[x]==dice)
//   acp1();
  
// }


  
    // roundscore=0;
    
    //  document.querySelector('#current-0').textContent=roundscore;
    //  document.querySelector('#current-1').textContent=roundscore;
      
//     document.querySelector('#current-0').textContent=0;
//     document.querySelector('#current-1').textContent=0;
//     // document.querySelector('.player-1-panel').textContent=0;
//  //   document.querySelector('.player-0-panel').textContent=0;
//     document.querySelector('.player-0-panel').classList.toggle('active');
//     document.querySelector('.player-1-panel').classList.toggle('active');
  
// }
var lastdice;
 
  // document.querySelector('#current-'+activeplayer).textContent=roundscore;
 
  // acp();
if(dice!==1)

{
  if(dice==6 && lastdice==6)
  {
    // scores[activeplayer]=0;
    acp()
  }
  roundscore=roundscore+dice;
  // console.log(roundscore);
  document.querySelector('#current-'+activeplayer).textContent=roundscore;
  
  
  
 

}
 
else 
{
  
  acp();
  document.querySelector('.player-score').textContent=0;

 
  document.querySelector('.dice').style.display='none';
  
}
lastdice=dice;

}

function newgame()
{
  document.querySelector('#current-0').textContent=0;
  document.querySelector('#current-1').textContent=0;
  document.querySelector('#score-1').textContent=0;
  document.querySelector('#score-0').textContent=0;
  document.querySelector('#name-'+activeplayer).textContent='Player';
  roundscore=0;
  scores[0,0];
  
}

document.querySelector('.btn-hold').addEventListener('click',hold())
  // acp();)

function acp()
{
  activeplayer===0?activeplayer=1:activeplayer=0;
  roundscore=0;
  document.querySelector('#current-0').textContent=0;
  document.querySelector('#current-1').textContent=0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}
function hold()
{
scores[activeplayer]+=roundscore;
  console.log(scores[activeplayer]);
  document.querySelector('#score-' + activeplayer).textContent=scores[activeplayer];
  if(scores[activeplayer]>=100)
  {
   document.querySelector('#name-'+activeplayer).textContent="Winner";
   
  
  }
  else
  {
    acp();
  }
}
function acp1()
{
  roundscore=0;
  document.querySelector('#current-0').textContent=0;
  document.querySelector('#current-1').textContent=0;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}