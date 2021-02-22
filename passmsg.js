

function message()
{
  var x=document.getElementById('msg').value;
document.getElementById('output').textContent=x;
if(document.getElementById('output').textContent==x)
{
document.getElementById('mdg-del').textContent="Message Delivered Successfully";

} 


if(x=="")
 {
  document.getElementById('mdg-del').textContent='No Input Is Submitted';
  
  document.getElementById('mdg-del').toggleAttribute('No Input Is Submitted',false);
 }
  
 
}
function abc()

{
  document.getElementById('msg').value="";
  
  document.getElementById('mdg-del').textContent="";
  document.getElementById('output').textContent="";


}
