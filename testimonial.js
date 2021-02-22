var m=0;
function front()
{
    if(m<5)
    {
    var b=document.getElementById('name');
   var a=document.getElementById('images');
   a.src="customer-"+m+".jpg";
   if(m==0)
   {
       b.textContent="Andy";
   }
  else if(m==1)
   {
       b.textContent="Andrew";
   }
   else if(m==2)
   {
       b.textContent="Rony";
   }
   else if(m==3)
   {
       b.textContent="Wanna";
   }
   else if(m==4)
   {
       b.textContent="Bobby";
   }
   m++;
   console.log(m);
}
  

}

function back()
{
    var b=document.getElementById('name');
    var a=document.getElementById('images');
   if(m>=0)
   {
   
   if(m==5)
   { m--;
       a.src="customer-"+m+".jpg";
       b.textContent="Bobby";
       m--;
   }
  else if(m==3)
   {
    a.src="customer-"+m+".jpg";
       b.textContent="Wanna";
       m--;
   }
  else if(m==2)
   {
    a.src="customer-"+m+".jpg";
       b.textContent="Ronny";
       m--;
   }
   else if(m==1)
   {
    a.src="customer-"+m+".jpg";
       b.textContent="Andrew";
       m--;
   }
   else if(m==0)
   {
    a.src="customer-"+m+".jpg";
       b.textContent="Andy";
   }
   }
   
    }
