
//                   ===========
//===================BIO BIO BIO=================
//                   ===========

/*
* `bio` contains:

            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string
                  github: string
                  twitter: string
                  location: string
            welcomeMessage: string
            skills: array of strings
            biopic: url
            display: function taking no parameters
*/


var bio = {
    "name" : "KR Decker" ,
    "role" : "Web Developer" ,
    "contacts" : {
        "mobile" : "1-306-500-6434" ,
        "email" : "krd.345@gmail.com" ,
        "github" : "https://github.com/krdecker" ,
        "twitter" : "@KRD_VANBC" ,
        "location" : "Vancouver, BC"
    } ,
    "welcomeMsg" : ". . . inquisitive mind; . . . relentless enthusiasm; . . . poetic nature." ,
    "skills" : [ "  Python" , "  JavaScript" , "  jQuery" , "  HTML/CSS" ] ,
    "bioPic" : "images/krd.png" ,

    display : function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
        //var formattedSkills = HTMLskills.replace("%data%", bio.skills);



        $("#header").prepend(formattedRole); // LIFO
        $("#header").prepend(formattedName);
        $("#topContacts").append(formattedEmail);
        $("#topContacts").append(formattedGitHub);
        $("#topContacts").append(formattedBioPic);
        $("#topContacts").append(formattedWelcomeMsg);


        //$("#skills").append(formattedSkills);

        if (bio.skills.length !== 0) {
           $("#header").append(HTMLskillsStart);
           // to do: loop thru skills array putting each in its own <li>
           $("#skills").append( HTMLskills.replace("%data%", bio.skills) ) ;
        } ;
    } // display func
} ; // bio obj


//                     ==============
// ====================WORK WORK WORK==================
//                     ==============

/*
* `work` contains

            jobs: array of objects with
                 employer: string
                 title: string
                 location: string
                 dates: string (works with a hyphen between them)
                 description: string
            display: function taking no parameters

*/

var work = {

        "jobs" : [
            {
                "employer": "International Alliance of Theatrical & Stage Employees",
                "title": "Motion Picture Lighting Technician",
                "location": "Vancouver",
                "dates":  "1992-2015",
                "description": "As member of a team, install and operate set lighting for major studio and location shooting. See resume at [link] (http://www.imdb.com/name/nm0213858/) imdb.com",
                //                "url": "http://www.iatse.com"
            },
            {
                "employer": "Vancouver Film School",
                "title": "Head Instructor: Film & Video Production",
                "location": "Vancouver",
                "dates": "1989-1992" ,
                "description": "Teach courses and conduct workshops on methods and means of film & video production. Organise programme, including schedule instructors and courses.",
                //                "url": "http://vfs.edu"
            },
            {
                "employer": "Concordia University, Faculty of Fine Arts",
                "title": "Assistant Professor",
                "location": "Montreal",
                "dates": "1982-1988",
                "description": "Teach courses on film/video art and writing for same.",
                //                "url": "https://www.concordia.ca/"
            },
            {
                "employer": "Logo Computer Systems Inc.",
                "location": "Montreal",
                "title": "Logo Developer",
                "dates": "1983-1984",
                "description": "Develop application in Logo to teach children use of keyboard.",
                //                "url": "http://www.imdb.com/name/nm0213858/"
            }
        ] ,

        "display" : "function()"
} ;

function displayWork() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart); // installs '.work-entry' div

        var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer) ;
        var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title) ;
        var concatFormattedEmployerAndTitle = formattedEmployer + formattedTitle ;
        var formattedDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates) ;
        var formattedDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description) ;

        $(".work-entry:last")
            .append(concatFormattedEmployerAndTitle)
            .append(formattedDates)
            .append(formattedDescription)
            ;
    }
}



// code examples:
// var formattedName = HTMLheaderName.replace("%data%", bio.name);
// $("#skills").append( HTMLskills.replace("%data%", bio.skills) ) ;



//                   =================
// ==================EDUCATION SECTION=================
//                   =================

/* `education` contains:

            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: integer (graduation date)
                 url: string
            onlineCourses: array with
                 title: string
                 school: string
                 date: integer (date finished)
                 url: string
            display: function taking no parameters
*/

var education = {

        "schools" : [
            {
                "name" : "Concordia University" ,
                "location" : "Montreal" ,
                "degree" : "Master of Arts" ,
                "majors" : ["Creative Writing" , "Computer Art: Coding in Pascal & C"] ,
                "dates" : 1982 ,
                "url" : "https://www.concordia.ca/finearts.html"
            } ,
            {
                "name" : "Concordia University" ,
                "location" : "Montreal" ,
                "degree" : "Bachelor of Fine Arts" ,
                "dates" : 1980 ,
                "majors" : ["Film Aesthetics" , "Film Production" , "Performance Art" ] ,
                "url" : "https://www.concordia.ca/finearts.html"
            } ,
            {
                "name": "University of Saskatchewan",
                "location": "Saskatoon",
                "dates": 1974,
                "majors": [ "Chemistry" , "English Literature" ] ,
                "degree": "Bachelor of Liberal Arts" ,
                "url" : "http://artsandscience.usask.ca/"
            }
        ] ,

        "onlineClasses" : [
            {
                "title": "Front End Developer nano-degree programme",
                "school": "Udacity",
                "date": 2015 ,
                "url": "https://www.udacity.com/nanodegrees"
            } ,
            {
                "title": "Google Python Workshop",
                "school": "Google",
                "date": 2014,
                "url": "https://developers.google.com/edu/python/"
            } ,
            {
                "title": "Web App Development",
                "school": "Udacity",
                "date": 2013,
                "url": "https://www.udacity.com/course/cs253"
            } ,
            {
                "title" : "Intro to Java Programming" ,
                "school" : "Udacity" ,
                "date" : 2013,
                "url" : "https://www.udacity.com/course/cs046"
            } ,
            {
                "title" : "Intro to Computer Science" ,
                "school" : "Udacity" ,
                "date" : 2013,
                "url" : "https://www.udacity.com/course/cs101"
            }
        ] ,

        display : function() {
            for (var school in this.schools) {
                $('#education').append(HTMLschoolStart);
                var formattedSchoolName = HTMLschoolName.replace('%data%' , this.schools[school].name)
                                                        .replace('#', this.schools[school].url);
                var formattedSchoolDegree = HTMLschoolDegree.replace('%data%' , this.schools[school].degree);
                var formattedSchoolNameDegree = formattedSchoolName + formattedSchoolDegree ;
                $('.education-entry:last').append(formattedSchoolNameDegree);
                var formattedSchoolDates = HTMLschoolDates.replace('%data%' , this.schools[school].dates);
                $('.education-entry:last').append(formattedSchoolDates);
                var formattedSchoolLocation = HTMLschoolLocation.replace('%data%' , this.schools[school].location);
                $('.education-entry:last').append(formattedSchoolLocation);
                var formattedSchoolMajor = HTMLschoolMajor.replace('%data%' , this.schools[school].majors.toString()
                                                            .replace(/,/g ,', '));
                $('.education-entry:last').append(formattedSchoolMajor);

            } // for school loop
            $('#education').append(HTMLonlineClasses);
            for (var onlineClass in this.onlineClasses) {

                var formattedOnlineTitle = HTMLonlineTitle.replace('%data%' , this.onlineClasses[onlineClass].title)
                                                            .replace('#' , this.onlineClasses[onlineClass].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace('%data%' , this.onlineClasses[onlineClass].school);
                $('#education > h3').append(formattedOnlineTitle + formattedOnlineSchool);
                var formattedonlineDate = HTMLonlineDates.replace('%data%' , this.onlineClasses[onlineClass].date);
                $('#education > h3').append(formattedonlineDate);
                var formattedOnlineURL = HTMLonlineURL.replace('%data%', this.onlineClasses[onlineClass].url);
                $('#education > h3').append(formattedOnlineURL);
            } // for onlineClasses loop
        } //display func
} // education obj
/*{
                "name": "University of Saskatchewan",
                "location": "Saskatoon",
                "dates": 1974,
                "majors": [ "Chemistry" , "English Literature" ] ,
                "degree": "Bachelor of Liberal Arts" ,
                "url" : "http://artsandscience.usask.ca/"
            }*/
/*
var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a>';
var HTMLschoolDates = '<div class="date-text">%data%</div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';
*/



//                               ================
//===============================PROJECTS SECTION==========================
//                               ================

/*
* `projects` contains:

5            projects: array of objects with
                  title: string
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters
*/

var projects = {

    "projects" : [

        {
            "title" : "Orange Udacity Mug" ,
            "dates" : "2014-15" ,
            "description" : "Project to create a static web page in html/css in the exact likeness of a given graphic mock-up." ,
            "images" : [ "images/mug.png" ]//, "images/page-mock.png" ]
        } ,

        {
            "title" : "KRD Portfolio" ,
            "dates" : "2014-15" ,
            "description" : "A portfolio of projects." ,
            "images" : [ "" ]
        } ,

        {
            "title" : "DADA soulève TOUT" ,
            "dates" : "2012" ,
            "description" : "A mainly static web-site deployed on Google App Engine." ,
            "images" : [""]
            // "url" : "http://international-dada.appspot.com/dadaman/manifesto.html"
        }

    ]

}

/*
var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<a href="#">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img src="%data%">';
*/

projects.display = function() {
//function displayProjects() {
    //console.log(projects.projects[1].title);
    for(var project in projects.projects) {
        //var curProject = projects.projects[project];
        console.log(project);
        $('#projects').append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%" , projects.projects[project].title) ;
        console.log(formattedTitle);
        $('.project-entry:last').append(formattedTitle);
        var formattedDates = HTMLprojectDates.replace("%data%" , projects.projects[project].dates) ;
        $('.project-entry:last').append(formattedDates);
        var formattedDescription = HTMLprojectDescription.replace("%data%" , projects.projects[project].description) ;
        $('.project-entry:last').append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for(var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%" , projects.projects[project].images[image]) ;
                $('.project-entry').append(formattedImage);
            } // for (image
        } // if (projects
    } // for (project
} // .display func




//                                  ===========
//==================================TOP TOP TOP==================================
//                                  ===========


bio.display();
displayWork();
projects.display(); // invoke
education.display();

//displayProjects();


$('#main').append(internationalizeButton);

function inName(name) {
    //var name = nameString;
    var spIndex = name.trim().indexOf(' ');

    name = name[0].toUpperCase() + name.slice(1, spIndex ) + ' ' + name.slice(spIndex+1).toUpperCase();

    return name;
}


$('#mapDiv').append(googleMap);

/*"Gozer the Traveller - he will come in one of the pre-chosen forms. During the rectification of the Vuldronaii,
the Traveller came as a large and moving Torb! Then, during the third reconciliation of the last of the Meketrex
supplicants, they chose a new form for him - that of a giant Sloar!
Many Shubs and Zuuls knew what it was to be roasted in the depths of a Sloar that day, I can tell you!"*/


