function initMap() {
  // The location of Uluru
  var uluru = {lat: -30.035, lng: -51.218};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 6, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}

function initializeTabs(evt, cityName){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for(i=0; i<tabcontent.length; i++){
    tabcontent[i].style.display="none";
  }
}

function openCity(evt, cityName){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for(i=0; i<tabcontent.length; i++){
    tabcontent[i].style.display="none";
  }
  tablinks=document.getElementsByClassName("tablinks");
  for(i=0; i<tablinks.length; i++){
    tablinks[i].className=tablinks[i].className.replace("active","");
  }
  document.getElementById(cityName).style.display="block";
  evt.currentTarget.className+=" active";
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}