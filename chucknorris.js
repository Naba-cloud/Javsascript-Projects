function getdata(){
    let datacur=document.querySelector('.jokes');
fetch('https://api.chucknorris.io/jokes/random')
 .then(response => response.json())
  .then(data =>{ console.log(data)
    datacur.innerHTML=data.value;
  }
  )
 .catch(err =>console.error())
 

}

function lightColor()
{
    document.querySelector('body').style.backgroundColor='white';
    document.querySelector('body').style.color='black';
}
function darkColor()
{
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('body').style.color='white';
}