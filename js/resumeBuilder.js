
//                   ===========
//===================BIO SECTION=================
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
        "location" : "East End, Saskatchewan"
    } ,
    "welcomeMsg" : ". . . inquisitive mind; . . . relentless enthusiasm; . . . poetic nature." ,
    "skills" : [ "  Python" , "  JavaScript" , "  jQuery" , "  HTML/CSS" ] ,
    "bioPic" : "images/krd.png" ,

    "display" : "function()"
} ;

/*
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);



$("#header").prepend(formattedRole); // LIFO
$("#header").prepend(formattedName);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedBioPic);
$("#topContacts").append(formattedWelcomeMsg);


$("#skills").append(formattedSkills);
*/

if (bio.skills.length !== 0) {
   $("#header").append(HTMLskillsStart);
   // to do: loop thru skills array putting each in its own <li>
   $("#skills").append( HTMLskills.replace("%data%", bio.skills) ) ;
} ;

//                     ============
// ====================WORK SECTION==================
//                     ============

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
                "description": "Teach courses and conduct workshops on methods and means of film & video production. Organise programme, including booking instructors and courses.",
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


for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer) ;
    var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title) ;
    $(".work-entry:last").append(formattedEmployer).append(formattedTitle) ;
} ;

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

        "schools": [
            {
                "name": "Concordia University" ,
                "location": "Montreal" ,
                "degree": "Master of Arts" ,
                "majors": ["Creative Writing" , "Pascal Programming"] ,
                "dates": 1982 ,
                "url" : "https://www.concordia.ca/finearts.html"
            } ,
            {
                "name": "Concordia University" ,
                "location": "Montreal" ,
                "degree": "Bachelor of Fine Arts" ,
                "dates": 1980 ,
                "majors": ["Film Aesthetics" , "Film Production" , "Performance Art" ]
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

        "on-line classes": [
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

        "display" : "function()"
} ;


//                 ================
//=================PROJECTS SECTION================
//                 ================

/*
* `projects` contains:

            projects: array of objects with
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
            "description" : "" ,
            "images" : [ "" , "" , "" ]
        } ,

        {
            "title" : "KRD Portfolio" ,
            "dates" : "" ,
            "description" : "" ,
            "images" : [ " " ]
        } ,

        {
            "title" : "" ,
            "dates" : "" ,
            "description" : "" ,
            "image" : [""]
        }

    ] ,

    "display" : "function()"
} ;







