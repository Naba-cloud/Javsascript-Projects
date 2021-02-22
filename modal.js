function hello()
{
  var a=document.getElementById('img1');
 a.src=1+'.jpg';
 var b=document.createElement('br');
 document.body.appendChild(b);
//  var b=document.getElementById('img2');
//  b.src=2+'.jpg';
 document.body.appendChild(b);
 var c=document.getElementById('img3');
 c.src=3+'.jpg';
 document.body.appendChild(b);
 var d=document.getElementById('img4');
 d.src=4+'.png';
 document.body.appendChild(b);
//  var e=document.getElementById('img5');
//  e.src=5+'.jpg';
// //  document.body.appendChild(b);
//  var f=document.getElementById('img6');
//  f.src=6+'.jpg';
 document.body.appendChild(b);
//  var g=document.getElementById('img7');
//  g.src=7+'.png';
//  document.body.appendChild(b);
//  var h=document.getElementById('img8');
//  h.src=8+'.jpg';
//  document.body.appendChild(b);
//  var i=document.getElementById('img9');
//  i.src=9+'.jpg';
//  document.body.appendChild(b);
//  var j=document.getElementById('img10');
//  j.src=10+'.jpg';
//  document.body.appendChild(b);
//  var k=document.getElementById('img11');
//  k.src=11+'.jpg';
//  document.body.appendChild(b);
//  var l=document.getElementById('img12');
//  l.src=12+'.jpg';
//  document.body.appendChild(b);
//  var m=document.getElementById('img13');
//  m.src=13+'.jpg';
//  document.body.appendChild(b);
//  var n=document.getElementById('img14');
//  n.src=14+'.png';
//  document.body.appendChild(b);
//  var o=document.getElementById('img15');
//  o.src=15+'.jpg';
//  document.body.appendChild(b);
//  var p=document.getElementById('img15');
//  p.src=1+'.jpg';
 document.body.appendChild(b);
 var arr=[a,c,d];
  
  for(i=0;i<arr.length;i++)
  {
    var m =document.createElement('br');
    document.body.appendChild(m);
    document.getElementById('imges').innerHTML=arr[i];
  document.body.appendChild(m);
  }
}
function hello1()
{
    var a=document.getElementById('img1');
    a.classList.add('modal-open');
    a.style.display='block';
    a.style.width='250px';
    a.style.height='200px';
    a.src=1+'.jpg';
    var m =document.createElement('br');
     document.body.appendChild(m);
    var target=document.createElement('button');
    target.textContent='close';
    // target.style.marginLeft='80%';
    // target.style.marginTop='0%';
    target.setAttribute('class','btn1');
    target.style.marginTop='0%';
    console.log(target);
    document.body.appendChild(target);
    target.onclick=function()
    {
        a.style.display='block';
        a.style.width='200px';
        a.style.height='200px';
         target.remove();
         
    }
   

}


function hello3()
{
    var c=document.getElementById('img3');
    c.classList.add('modal-open');
    c.style.display='block';
    c.style.width='250px';
    c.style.height='200px';
    c.src=3+'.jpg';
  
    var target2=document.createElement('button');
    target2.innerHTML='close';
    document.body.appendChild(target2);
    target2.setAttribute('class','btn2');
    console.log(target2);
    target2.onclick=function()
    {
        c.classList.remove('modal-close'); 
        c.style.width='200px';
        c.style.height='200px';
        target2.remove();
        
    }

}
function hello4()
{
    var d=document.getElementById('img4');
    d.classList.add('modal-open');
    d.style.display='block';
    d.style.width='250px';
    d.style.height='200px';
    d.src=4+'.png';
  
    var target3=document.createElement('button');
    target3.innerHTML='close';
    document.body.appendChild(target3);
    target3.setAttribute('class','btn3');
    console.log(target3);
    target3.onclick=function()
    {
        d.classList.remove('modal-close'); 
        d.style.width='200px';
        d.style.height='200px';
        target3.remove();
        
    }

}
function zoomin()
{
    var a=document.getElementById('para');
    a.style.fontSize='20px';
}
function zoomout()
{
    
    var a=document.getElementById('para');
    a.style.fontSize='10px';
}
//  function hello5() {
//     var e=document.getElementById('img5');
//          e.classList.add('modal-open');
//     e.style.display='block';
//     e.style.width='500px';
//     e.style.height='300px';
//     e.src=5+'.jpg';
  
//     var target4=document.createElement('button');
//     target4.innerHTML='close';
//     document.body.appendChild(target4);
//     target4.onclick=function()
//     {
//         e.classList.remove('modal-close'); 
//         e.style.width='200px';
//         e.style.height='200px';
//         target4.remove();
        
//     }

//  }
// function hello1()
// {
//     var a=document.getElementById('img1');
//     a.classList.add('modal-open');
//     a.style.display='block';
//     a.style.width='500px';
//     a.style.height='300px';
//     a.src=1+'.jpg';
    
//     var target=document.createElement('button');
//     target.innerHTML='close';
//     target.style.position='absolue';
//     target.style.top='-4%';
//     document.body.appendChild(target);
  
   
//     target.onclick=function()
//     {
//         a.classList.remove('modal-close'); 
//         a.style.width='200px';
//         a.style.height='200px';
//         target.innerHTML='';
//         target.remove();
        
//     }

// }
// function hello1()
// {
//     var a=document.getElementById('img1');
//     a.classList.add('modal-open');
//     a.style.display='block';
//     a.style.width='500px';
//     a.style.height='300px';
//     a.src=1+'.jpg';
  
//     var target=document.createElement('button');
//     target.innerHTML='close';
//     document.body.appendChild(target);
//     target.onclick=function()
//     {
//         a.classList.remove('modal-close'); 
//         a.style.display='none';
        
//     }

// }
// function hello1()
// {
//     var a=document.getElementById('img1');
//     a.classList.add('modal-open');
//     a.style.display='block';
//     a.style.width='500px';
//     a.style.height='300px';
//     a.src=1+'.jpg';
  
//     var target=document.createElement('button');
//     target.innerHTML='close';
//     document.body.appendChild(target);
//     target.onclick=function()
//     {
//         a.classList.remove('modal-close'); 
//         a.style.display='none';
        
//     }

// }
// function hello1()
// {
//     var a=document.getElementById('img1');
//     a.classList.add('modal-open');
//     a.style.display='block';
//     a.style.width='500px';
//     a.style.height='300px';
//     a.src=1+'.jpg';
  
//     var target=document.createElement('button');
//     target.innerHTML='close';
//     document.body.appendChild(target);
//     target.onclick=function()
//     {
//         a.classList.remove('modal-close'); 
//         a.style.display='none';
        
//     }

// }
// function hello1()
// {
//     var a=document.getElementById('img1');
//     a.classList.add('modal-open');
//     a.style.display='block';
//     a.style.width='500px';
//     a.style.height='300px';
//     a.src=1+'.jpg';
  
//     var target=document.createElement('button');
//     target.innerHTML='close';
//     document.body.appendChild(target);
//     target.onclick=function()
//     {
//         a.classList.remove('modal-close'); 
//         a.style.display='none';
        
//     }

// }
// function hello1()
// {
//     var a=document.getElementById('img1');
//     a.classList.add('modal-open');
//     a.style.display='block';
//     a.style.width='500px';
//     a.style.height='300px';
//     a.src=1+'.jpg';
  
//     var target=document.createElement('button');
//     target.innerHTML='close';
//     document.body.appendChild(target);
//     target.onclick=function()
//     {
//         a.classList.remove('modal-close'); 
//         a.style.display='none';
        
//     }

// }
// function hello1()
// {
//     var a=document.getElementById('img1');
//     a.classList.add('modal-open');
//     a.style.display='block';
//     a.style.width='500px';
//     a.style.height='300px';
//     a.src=1+'.jpg';
  
//     var target=document.createElement('button');
//     target.innerHTML='close';
//     document.body.appendChild(target);
//     target.onclick=function()
//     {
//         a.classList.remove('modal-close'); 
//         a.style.display='none';
        
//     }

// }
// function hello1()
// {
//     var a=document.getElementById('img1');
//     a.classList.add('modal-open');
//     a.style.display='block';
//     a.style.width='500px';
//     a.style.height='300px';
//     a.src=1+'.jpg';
  
//     var target=document.createElement('button');
//     target.innerHTML='close';
//     document.body.appendChild(target);
//     target.onclick=function()
//     {
//         a.classList.remove('modal-close'); 
//         a.style.display='none';
        
//     }

// }
// function hello1()
// {
//     var a=document.getElementById('img1');
//     a.classList.add('modal-open');
//     a.style.display='block';
//     a.style.width='500px';
//     a.style.height='300px';
//     a.src=1+'.jpg';
  
//     var target=document.createElement('button');
//     target.innerHTML='close';
//     document.body.appendChild(target);
//     target.onclick=function()
//     {
//         a.classList.remove('modal-close'); 
//         a.style.display='none';
        
//     }

// }
// function hello1()
// {
//     var a=document.getElementById('img1');
//     a.classList.add('modal-open');
//     a.style.display='block';
//     a.style.width='500px';
//     a.style.height='300px';
//     a.src=1+'.jpg';
  
//     var target=document.createElement('button');
//     target.innerHTML='close';
//     document.body.appendChild(target);
//     target.onclick=function()
//     {
//         a.classList.remove('modal-close'); 
//         a.style.display='none';
        
//     }

