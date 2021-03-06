var quantity=[];
var pricitem=[];
var bill=0;
var totalprice=0;
for(var i=0;i<10;i++)
{

quantity[i]=+prompt('enter quantity');
pricitem[i]=+prompt ('enter price of item');

}
for(var i=0;i<10;i++)
{
 bill+=quantity[i];
 totalprice+=pricitem[i];
}
console.log('bill without discount');
console.log(bill);
if(bill>5000)
{
 bill=bill-bill*(10/100);
 console.log('discounted ')
 console.log(bill);

}
else{
    console.log(bill);
}
console.log('total  item price');
console.log(totalprice);