var people;
var  diskSpace;
var support;
var typeDisk;
var mount;
var price=document.querySelector("#price");
// 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();
var date= {
    "1":1,
    "2":1,
    "3":1,
    "4":0.9,
    "5":0.9,
    "6":0.9,
    "7":0.9,
    "8":0.9,
    "9":0.9,
    "10":0.9,
    "11":0.9,
    "12":0.8,
    "13":0.8,
    "14":0.8,
    "15":0.8,
    "16":0.8,
    "17":0.8,
    "18":0.8,
    "19":0.8,
    "20":0.8,
    "21":0.8,
    "22":0.8,
    "23":0.8,
    "24":0.8,
    "25":0.7,
    "26":0.6,
    "27":0.6,
    "28":0.6,
    "29":0.6,
    "30":0.6,
    "31":0.6,
    "32":0.6
}

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', 'db.json', false);
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
   if (document.querySelector("#defaultCheck1").checked){
       pricet+=1;
   }
    if (document.querySelector("#defaultCheck2").checked){
        pricet+=9;
    }
    pricet*=date[mount];
    pricet = pricet.toFixed(2)

    console.log( );
    price.innerHTML = "Цена: "+pricet+"$/mo";
    setTimeout(price1,100);
    return  pricet;
}
price1();
function restart() {
    location.reload();
}


