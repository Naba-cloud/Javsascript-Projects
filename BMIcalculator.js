function bmical(){
  
 
  var x;
   x=document.getElementById('weights').value;
   var y;
   y=document.getElementById('heights').value;
  var res;
 
y=(y/100)*(y/100);
      var res=((x/y).toFixed(2));
      // console.log(rest);
    document.getElementById('output').textContent=res+"kg/m2";

   
  if(x=="" || y=="")
  {
    document.getElementById('output').textContent="please enter something";
  }
  
}