var people;
var  diskSpace;
var support;
var typeDisk;
var mount;
var price=document.querySelector("#price");
function price1() {
   people=document.querySelector("#people").value;
   diskSpace=document.querySelector("#diskSpace").value;
   support=document.querySelector("#support").value;
   typeDisk=document.querySelector("#typeDisk").value;
   mount = document.querySelector("#mounth").value;
   if(mount >= 12){
       document.querySelector("#present").innerHTML = "Домен в подарок";
   }
   else {
       document.querySelector("#present").innerHTML = "";
   }
   var pricet=people*typeDisk*(diskSpace+support);
    console.log( );
    price.innerHTML = "Цена: "+pricet+"$";
    setTimeout(price1,1000);
    return  pricet;
}
price1();


