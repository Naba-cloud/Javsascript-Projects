var arr1=[1,2,3,4,5,6,7,8,9,10];

function count(){

 var x=document.getElementById('cs').textContent;

    if(x>0||x==0||x<0)
{
    x++;
    document.getElementById('cs').textContent=x;
}
if(x>0||x==0)
{
   
    // document.getElementById('cs').textContent=x;
    document.getElementById('cs').style.color="green";

    



}
}
function countl(){

    var x=document.getElementById('cs').textContent;
   
       if(x<0||x==0||x>0)
   {
       x--;
       document.getElementById('cs').textContent=x;
   
   }
   if(x<0||x==0)
   {
       // document.getElementById('cs').textContent=x;
       document.getElementById('cs').style.color="red";
   
       
   
   
   
   }
   }














