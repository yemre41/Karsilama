let info=prompt("Lütfen Adınızı Soy Adınızı Giriniz...")
let write = document.querySelector("#info")
let clock = document.querySelector("#clock")
var date=new Date().toLocaleString('tr-TR')
write.innerHTML=`Merhaba,${info}! Hoş Geldin!`
clock.innerHTML=date
