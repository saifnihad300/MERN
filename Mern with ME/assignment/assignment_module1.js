


function multiplicationTable(num)
{
  var product=1;
  for(var i=1;i<=10;i++)
  {
    product=num*i;
    console.log(`${num}X${i}=${product}`)
  }

}

multiplicationTable(8)