
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<br><span>%data%</span>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile:</span><span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email:</span><span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter:</span><span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github:</span><span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog:</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location:</span><span class="white-text">%data%</span></li>';

var HTMLbioPic = '<img src="%data%" class="biopic" alt="Head-shot.">';
var HTMLWelcomeMsg = '<br><span class="welcome-message light">%data%</span><br><br>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance:</h3>';
var HTMLskills = '<li><span class="skills-text gray">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<p class="job-title"><a href="#">%data%';
var HTMLworkTitle = ' - %data%</a></p>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<p><br>%data%</p>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%" alt="this mind intentionally left blank">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<div class="school-degree"><a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a></div>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<div class="majors"><em><br>Majors: %data%</em></div>';

var HTMLonlineClasses = '<div class="on-line"><br><h3>Online Classes</h3></div>';
var HTMLonlineTitle = '<div class="on-line-title-school"><a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<div class="online-class-ref"><br><a href="#">%data%</a></div>';

var HTMLblackWhiteToggle = '<button class="switch"> Black <-> White </button>';
var HTMLgoogleMap = '<div id="map-box"></div>';









/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/

// clickLocations = [];

// function logClicks(x,y) {
//   clickLocations.push(
//     {
//       x: x,
//       y: y
//     }
//   );
//   console.log('x location: ' + x + '; y location: ' + y);
// }

// $(document).click(function(loc) {
//   // your code goes here!
//   logClicks(loc.pageX , loc.pageY);
// });


/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map;    // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    // This next line makes `map` a new Google Map JavaScript Object and attaches it to
    // <div id="map-box">, which is appended as part of an exercise late in the course.
    map = new google.maps.Map(document.querySelector('#map-box'), mapOptions);



    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    // invoked at top-level of this.
    function locationFinder() {

        // initializes an empty array
        var locations = [];

        // adds the single location property from bio to the locations array
        locations.push(bio.contacts.location);

        // iterates through school locations and appends each location to
        // the locations array
        for (var school in education.schools) {
            locations.push(education.schools[school].location);
        }

        // iterates through work locations and appends each location to
        // the locations array
        for (var job in work.jobs) {
            locations.push(work.jobs[job].location);
        }

        return locations;
    } // locationFinder func

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    // invoked by callback()
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat();  // latitude from the place service
        var lon = placeData.geometry.location.lng();  // longitude from the place service
        var name = placeData.formatted_address;   // name of the place from the place service
        var bounds = window.mapBounds;            // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
//TODO: add pix to these little windows
        var infowindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
            infowindow.open(map,marker);
        });
        // close window when user moves the flèche
        google.maps.event.addListener(marker, 'mouseout', function() {
            infowindow.close(map,marker);
        });
        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    } // createMapMarker func

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    // invoked in pinPoster()
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        } // if (status
    } // callback func

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    // invoked at top-level of this. (see below)
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        for (var place in locations) {

            // the search request object
            var request = {
                query: locations[place]
            };

        // Actually searches the Google Maps API for location data and runs the callback
        // function with the search results after each search.
            service.textSearch(request, callback);
        } // for
    } // pinPoster func

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // view from Space!
    map.setMapTypeId(google.maps.MapTypeId.SATELLITE);

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);


} // initializeMap func

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

/*********Top Level*************/
// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
  // Make sure the map bounds get updated on page resize
  map.fitBounds(mapBounds);
});
