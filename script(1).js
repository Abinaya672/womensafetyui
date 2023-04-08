function formValidation()
{
   var name=document.getElementById("name");
   var relation=document.getElementById("relation");
   let x=document.getElementById("phone");

   if(name.value=="")
   {
      alert("name field is empty!");
      return false;
   }
   if(relation.value=="")
   {
      alert("relation field is empty!");
      return false;
   }
   if(x.value>10)
   {
      alert("invalid Number!");
      return false;
   }
}
function triggerAlarm()
{
   alert("SOS Alarm Activated!");
}
function getLocation() {
	if (navigator.geolocation) {

		navigator.geolocation.getCurrentPosition(getPosition);

	} else { // if not, kill it.
		console.log("No Dice.")
		return;
	}
}

// Get the lat and long from the coordinates.
function getPosition(position) {
	var lat = position.coords.latitude;
	var long = position.coords.longitude
	console.log("Position: ", lat, ", ", long);
	
		// set a new request...
		var req = new XMLHttpRequest();
		// from this url
		var url = "https://nominatim.openstreetmap.org/reverse?format=json&lat=" + lat + "&lon=" + long + "&zoom=18&addressdetails=1";
		console.log(url);
		
		req.onload = function(e) {

			// returns an string response
			var theResponse = req.response;	
			console.log(theResponse)

			// format the payload into an object...
			var formatted = JSON.parse(theResponse);
			console.log(formatted);
			// get the data you need
			var country = formatted.address.country;		
			var province = formatted.address.state;
			var city = formatted.address.city;

			document.getElementById("getLocation").addEventListener("click", function(e) {
				var outputCountry = document.getElementById("output").innerHTML = city + ", " + province + ", " + country;
			});
		}
		
        // open connection, then send query	
		req.open("GET", url);
		req.send();
}

getLocation();