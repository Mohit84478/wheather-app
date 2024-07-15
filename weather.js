const key = "25e00c971aa652da07935ba67e3f2e0f";
 const url = "https://api.openweathermap.org/data/2.5/weather?q="
 

 async function checkweather(city){
    const response =await fetch(url +city +`&appid=${key}`);
    var data=await response.json()

    if(response.status==404){
      document.getElementById("show").className="none"
      document.getElementById("hid").className="hidden"
    }
    else{
console.log(data)
       document.getElementById("cityname").textContent= data.name;
       document.getElementById("temp").textContent= Math.round(data.main.temp-273.15)+"°C" ;
       document.getElementById("htemp").textContent= data.main.humidity +"%";
       document.getElementById("wtemp").textContent= data.wind.speed +"km/h";
       if(data.weather[0].main =="Haze"    ){
          document.getElementById("weatherimg").src = "rainy.webp"
         }
         else if(data.weather[0].main =="Clouds"){
            document.getElementById("weatherimg").src = "download Clouds.jpeg"
         }
         else if(data.weather[0].main =="Thunderstorm"){
            document.getElementById("weatherimg").src = "rainy.webp"
         }
         else if(data.weather[0].main =="clear"){
            document.getElementById("weatherimg").src = "sunny.webp"
         }
         document.getElementById("hid").className="none"
         document.getElementById("show").className="hidden"
      }   
}
function searchbtn()
{
   const x=document.getElementById("f")
 if(x.value==''){
   alert("entre a city or country name")
 }
 else(
   checkweather(f.value)
 )
 x.value='';
}


