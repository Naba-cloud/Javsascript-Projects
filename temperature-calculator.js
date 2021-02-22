function temper()
{
    var x=document.getElementById('temp').value;
    x=(x*9/5)+32;
    document.getElementById('output').textContent=x;
    if(x=="")
    {
        document.getElementById('output').textContent="Please Give Value In Input Box";  
    }
}
