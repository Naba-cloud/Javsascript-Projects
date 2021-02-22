//  var n=5;
//     var factorial=1;
//     if(n<0)
//     {
//         console.log('not exist');
//     }
//     else{
//         for(i=1;i<=n;i++)
//         {
//           factorial=factorial*i;

//         }
//         document.write(factorial);
//     }

function fact()
{
    var x=document.getElementById('textinp').value;
    var factorial=1;
    if(x<0)
     {        console.log('not exist');
    }
    else{
        for(i=1;i<=x;i++)
        {
         factorial=factorial*i;

        }
      document.getElementById('output').textContent=factorial;
}
}