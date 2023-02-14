//inializing lyer
let form = document.getElementById("form");
let country = document.getElementById("country");
let city = document.getElementById("city");
let get = document.getElementById("get");
let layer = document.querySelector(".lyr");
let btn = document.querySelector(".btn");
let fjr =document.getElementById("fjr1")
let shro1 =document.getElementById("shro1")
let dohr1 =document.getElementById("dohr1")
let asr1 =document.getElementById("asr1")
let magh1 =document.getElementById("magh1")
let asha1 =document.getElementById("asha1")
let header =document.querySelector(".header")




btn.addEventListener("click", () => {
  layer.classList.remove("show");
});
get.addEventListener("click", () => {
  if (city.value == "" || country.value == " ") {
    layer.classList.add("show")
  } else {
    axios.get(`http://api.aladhan.com/v1/timingsByCity/:date_or_timestamp?country=${country.value}&city=${city.value}`)
    .then( res  =>{
     let slah =res.data.data.timings
    
let time =res.data.data.date.readable
let day =res.data.data.date.hijri.weekday.ar

header.innerHTML =`   <h1 class="h1"> ${city.value} </h1>
<h4 id="time">${time} :${day}</h4>
<hr class="line">
`

fjr.innerText = slah.Fajr
shro1.innerText =slah.Sunset
dohr1.innerText =slah.Dhuhr
asr1.innerText =slah.Asr
magh1.innerText =slah.Maghrib
asha1.innerHTML =slah.Isha

    })
  }
});
//render element before search
function add(){

    axios.get('http://api.aladhan.com/v1/timingsByCity/:date_or_timestamp?country=EG&city=qena')
    .then( res  =>{
     let slah =res.data.data.timings
    
let time =res.data.data.date.readable
let day =res.data.data.date.hijri.weekday.ar

header.innerHTML =`   <h1 class="h1"> قنا </h1>
<h4 id="time">${time} :${day}</h4>
<hr class="line">
`

fjr.innerText = slah.Fajr
shro1.innerText =slah.Sunset
dohr1.innerText =slah.Dhuhr
asr1.innerText =slah.Asr
magh1.innerText =slah.Maghrib
asha1.innerHTML =slah.Isha

    })
}

add()