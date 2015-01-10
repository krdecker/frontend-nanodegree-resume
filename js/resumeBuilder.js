
var bio = {
    "name" : "KR Decker" ,
    "role" : "Web Developer" ,
    "contacts" : {
        "email" : "krd.345@gmail.com" ,
        "github" : "https://github.com/krdecker"
    } ,
    "welcomeMsg" : ". . . inquisitive mind; . . . relentless enthusiasm; . . . poetic nature." ,
    "skills" : [ "  Python" , "  JavaScript" , "  jQuery" , "  HTML/CSS" ] ,
    "bioPic" : "images/krd.png"
} ;

// ============================

var work = [
    {
        "organisation": "International Alliance of Theatrical & Stage Employees",
        "position": "Motion Picture Lighting Technician",
        "location": "Vancouver",
        "dates":  "1992-2015",
        "company": "Decker Illumination Ltd.",
        "description": "As member of a team, install and operate set lighting for major studio and location shooting. See resume at [link] (http://www.imdb.com/name/nm0213858/) imdb.com",
        "url": "http://www.iatse.com"
    },
    {
        "organisation": "Vancouver Film School",
        "position": "Head Instructor: Film & Video Production",
        "location": "Vancouver",
        "dates": "1989-1992" ,
        "company": "Applied Video Display",
        "description": "Teach courses and conduct workshops on methods and means of film & video production. Organise programme, including booking instructors and courses.",
        "url": "http://vfs.edu"
    },
    {
        "organisation": "Concordia University, Faculty of Fine Arts",
        "position": "Assistant Professor",
        "location": "Montreal",
        "dates": "1982-1988",
        "company": "Decker Illumination Ltd.",
        "description": "Teach courses on film/video art and writing for same.",
        "url": "https://www.concordia.ca/"
    },
    {
        "organisation": "Logo Computer Systems Inc.",
        "location": "Montreal",
        "position": "Logo Developer",
        "dates": "1983-1984",
        "company": "Nerf Net Ltd.",
        "description": "Develop application in Logo to teach children use of keyboard.",
        "url": "http://www.imdb.com/name/nm0213858/"
    }
] ;






// ===================================

var education = {
    "schools": [
        {
            "name": "Concordia University",
            "location": "Montreal",
            "dates": "1980-82",
            "degree": "Master of Arts",
            "major": "Creative Writing"
        },
        {
            "name": "Concordia University",
            "location": "Montreal",
            "dates": "1977-80",
            "major": "Film Aesthetics & Production",
            "degree": "Bachelor of Fine Arts"
        },
        {
            "name": "University of Saskatchewan",
            "location": "Saskatoon",
            "dates": "1969-73",
            "major": "Chemistry & English Lit.",
            "degree": "Bachelor of Liberal Arts"
        }
    ],
    "on-line classes": [
        {
            "title": "Front End Developer nano-degree programme",
            "school": "Udacity",
            "dates": "Winter 2014-15",
            "url": "https://www.udacity.com/nanodegrees"
        },
        {
            "title": "Google Python Workshop",
            "school": "Google",
            "dates": "Summer 2012",
            "url": "https://developers.google.com/edu/python/"
        },
        {
            "title": "Web App Development",
            "school": "Udacity",
            "dates": "Spring 2012",
            "url": "https://www.udacity.com/course/cs253"
        }
    ]
} ;

//===================

var projects = [

    {
        "title" : "" ,
        "dates" : "" ,
        "description" : "" ,
        "image" : ""
    } ,

    {
        "title" : "" ,
        "dates" : "" ,
        "description" : "" ,
        "image" : ""
    } ,

    {
        "title" : "" ,
        "dates" : "" ,
        "description" : "" ,
        "image" : ""
    }

] ;

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





