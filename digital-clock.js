var now=new Date();
if(now.getHours()<=12)
{
var x=now.toTimeString().replace('GMT+0500 (Pakistan Standard Time)','AM');
document.write(x);
}
else{
    var x=now.toTimeString().replace('GMT+0500 (Pakistan Standard Time)','PM');
document.write(x);

}
