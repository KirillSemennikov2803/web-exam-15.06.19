var people;
var  diskSpace;
var support;
var typeDisk;
var price=document.querySelector("#price");
function price1() {
   people=document.querySelector("#people").value;
   diskSpace=document.querySelector("#diskSpace").value;
   support=document.querySelector("#support").value;
   typeDisk=document.querySelector("#typeDisk").value;
   var pricet=people*typeDisk*(diskSpace+support);
    console.log( );
    price.innerHTML = "Цена: "+pricet+"$";
    setTimeout(price1,2000);
    return  pricet;
}
price1();
