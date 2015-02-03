
//                   ===========
//===================BIO BIO BIO=================
//                   ===========

var bio = {
    "name" : "/ken-decker/" ,
    "role" : "web-development" ,
    "contacts" : {
        "mobile" : "1-306-500-6434" ,
        "email" : "h0088.8800h@gmail.com" ,
        "github" : "github.com/ken-decker" ,
        "twitter" : "@h0088H8800h" ,
        "location" : "Vancouver, BC"
    } ,
    "welcomeMsg" : ". . . inquisitive mind; . . . relentless enthusiasm; . . . poetic nature." ,
    "skills" : [ "  Python" , "  JavaScript" , "  jQuery" , "  HTML/CSS" ,
                    "  Google AppEngine " , "  Twitter Bootstrap " ,
                    "  Google Maps API" , "  GitHub Pages ", "  C/Unix"
                ] ,
    "bioPic" : "images/krd.png" ,

    display : function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
        var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);

        $('#header').append(HTMLblackWhiteToggle);
        $("#header").prepend(formattedRole);
        $("#header").prepend(formattedName);

        $("#topContacts, #footerContacts").append(formattedEmail);
        $("#topContacts, #footerContacts").append(formattedGitHub);
        $("#topContacts, #footerContacts").append(formattedTwitter);

        $("#header").append(formattedBioPic);
        $("#header").append(formattedWelcomeMsg);

        if (bio.skills.length !== 0) {
            $("#header").append(HTMLskillsStart);
            for (skill in bio.skills) {
                $("#skillsH3").append( HTMLskills.replace("%data%", bio.skills[skill]) ) ;
            } // for skill loop
        } ; // if bio.skills branch
    } // display method
}; // bio object



//                               ==============
// ==============================WORK WORK WORK==================
//                               ==============

var work = {

    "jobs" : [
        {
            "employer": "International Alliance of Theatrical & Stage Employees",
            "title": "Motion Picture Lighting Technician",
            "location": "Vancouver",
            "dates":  "1992-2015",
            "description": 'As member of a team, install and operate set lighting for major studio and location shooting.<br>See resume at<a href="http://www.imdb.com/name/nm0213858/"> imdb.com</a>',
            "url": "http://www.iatse.com"
        },
        {
            "employer": "Vancouver Film School",
            "title": "Head Instructor: Film & Video Production",
            "location": "Vancouver",
            "dates": "1989-1992" ,
            "description": "Teach courses and conduct workshops on methods and means of film & video production.<br>Organise programme, including schedule instructors and courses.",
            "url": "http://vfs.edu"
        },
        {
            "employer": "Concordia University, Faculty of Fine Arts",
            "title": "Assistant Professor",
            "location": "Montreal",
            "dates": "1982-1988",
            "description": "Teach courses on film/video art and writing for same.",
            "url": "https://www.concordia.ca/"
        },
        {
            "employer": "Logo Computer Systems Inc.",
            "location": "Montreal",
            "title": "Logo Developer",
            "dates": "1983-1984",
            "description": "Develop application in Logo to teach children use of keyboard.",
            "url": "http://www.microworlds.com/"
        }
    ] ,

    display : function() {
        for (job in work.jobs) {
            $("#workExperience").append(HTMLworkStart); // installs '.work-entry' div

            var formattedEmployer = HTMLworkEmployer.replace("%data%" , work.jobs[job].employer)
                                                    .replace("#", work.jobs[job].url) ;
            var formattedTitle = HTMLworkTitle.replace("%data%" , work.jobs[job].title) ;
            var concatFormattedEmployerAndTitle = formattedEmployer + formattedTitle ;
            var formattedDates = HTMLworkDates.replace("%data%" , work.jobs[job].dates) ;
            var formattedDescription = HTMLworkDescription.replace("%data%" , work.jobs[job].description) ;

            $(".work-entry:last")
                .append(concatFormattedEmployerAndTitle)
                .append(formattedDates)
                .append(formattedDescription)
                ;
        } // for loop block
    } // display method
}; // work object




//                              =================
// =============================EDUCATION SECTION=================
//                              =================

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
                "url": "www.udacity.com/nanodegrees"
            } ,
            {
                "title": "Google Python 2-Day Intensive",
                "school": "Google",
                "date": 2014,
                "url": "developers.google.com/edu/python/"
            } ,
            {
                "title": "Web App Development",
                "school": "Udacity",
                "date": 2013,
                "url": "www.udacity.com/course/cs253"
            } ,
            {
                "title" : "Intro to Java Programming" ,
                "school" : "Udacity" ,
                "date" : 2013,
                "url" : "www.udacity.com/course/cs046"
            } ,
            {
                "title" : "Intro to Computer Science" ,
                "school" : "Udacity" ,
                "date" : 2013,
                "url" : "www.udacity.com/course/cs101"
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
                                                            .replace('#' , 'http://' + this.onlineClasses[onlineClass].url);
                var formattedOnlineSchool = HTMLonlineSchool.replace('%data%' , this.onlineClasses[onlineClass].school);
                $('.on-line').append(formattedOnlineTitle + formattedOnlineSchool);
                var formattedonlineDate = HTMLonlineDates.replace('%data%' , this.onlineClasses[onlineClass].date);
                $('.on-line-title-school:last').append(formattedonlineDate);
                var formattedOnlineURL = HTMLonlineURL.replace('%data%', this.onlineClasses[onlineClass].url)
                                                        .replace('#', 'http://' + this.onlineClasses[onlineClass].url);
                $('.on-line-title-school:last').append(formattedOnlineURL);
            } // for onlineClasses loop
        } //display method
}; // education object



//                               ================
//===============================PROJECTS SECTION==========================
//                               ================

var projects = {

    "projects" : [

        {
            "title" : "Orange Udacity Mug" ,
            "dates" : "2014-15" ,
            "description" : "Project to create a static web page in html/css in the exact likeness of a given graphic mock-up." ,
            "images" : [
                "images/mug.png" ,
                "",
                "images/page-mock.png" ,
                ""
            ] ,
            "url" : "http://krdecker.github.io/udacity-mug/"
        } ,

        {
            "title" : "KRD Portfolio" ,
            "dates" : "2014-15" ,
            "description" : "A portfolio of projects." ,
            "images" : [
                "",
                "images/basquiat-boy-dog.jpg",
                "",
                "images/Franz-Kafka-The-Metamorphosis.jpg"
            ] ,
            "url" : "http://krdecker.github.io/krd_portfolio/"
        } ,

        {
            "title" : "DADA soulève TOUT" ,
            "dates" : "2012" ,
            "description" : "A mainly static web-app deployed on Google App-Engine." ,
            "images" : [
                "images/dada-souleve-tout.png" ,
                "images/Merz299_Schwitters.png",
                "images/cabaret-voltaire.png" ,
                "images/man-ray-still-life.png"
            ] ,
            "url" : "http://www.international-dada.appspot.com"
        } ,

        {
            "title" : "On-Line Resumé" ,
            "dates" : "2015" ,
            "description" : "Project to create an on-line resumé." ,
            "images" : [
                "images/krd-card.png",
                "images/SD.jpg",
                "",
                "images/SouscrivezaDADA.jpg"
            ] ,
            "url" : "http://krdecker.github.io/frontend-nanodegree-resume"
        }

    ],
    display : function() {
        //console.log(projects.projects[1].title);
        for(var project in projects.projects) {
            //var curProject = projects.projects[project];
            //console.log(project);
            $('#projects').append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%" , projects.projects[project].title)
                                                    .replace("#" , projects.projects[project].url ) ;
            //console.log(formattedTitle);
            $('.project-entry:last').append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%" , projects.projects[project].dates) ;
            $('.project-entry:last').append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%" , projects.projects[project].description) ;
            $('.project-entry:last').append(formattedDescription);
            if (projects.projects[project].images.length > 0) {
                for(var image in projects.projects[project].images) {
                    var formattedImage = HTMLprojectImage.replace("%data%" , projects.projects[project].images[image]) ;
                    $('.project-entry:last').append(formattedImage);
                } // for (image loop
            } // if (projects branch
        } // for (project loop
    } // .display method
}; // projects object



//                                  ===========
//==================================TOP TOP TOP==================================
//                                  ===========


// Tools for folding

var folders = {
    "projects" : projects,
    "workExperience" : work ,
    "education" : education
}

function openFolder(jQobj) {
    var _id = jQobj.id;
    for ( folder in folders) {
        if (folder == _id) {
            folders[folder].display();
        }
    }
}





$(document).ready(function() {

// Set-Up

    // Display the header & biography section
    bio.display();
    // Attach the map element to the DOM for the map functionality in helper.js (could move this there)
    $('#mapDiv').append(HTMLgoogleMap);

// Event Handlers

    // Black <-> White switch event-handler
    $('button').click(function() {
        $('#main').toggleClass( "light dark" );
        $('.welcome-message').toggleClass( "light dark" );
    });

    // event-handler to open & close the folder sections:
    // Work Experience, Projects, Education
    // class .un-opened signals call to display() method on the object
    // toggled class .open/.closed controls css rule for high-lighting on :hover
    $('.folder').click(function() {
        var $this = $(this);
        if ( $this.hasClass("un-opened") ) {
            openFolder(this);
            $this.removeClass("un-opened")
                 .toggleClass("open closed");
        } else {
            $this.find('div').slideToggle();
            if ( $this.hasClass("open") ) {
                // give time for sliding before switching to 'closed'
                setTimeout(func, 1000);
                function func() {
                    $this.toggleClass("open closed");
                }
            } else {
                $this.toggleClass("open closed");
            };
        };
    });




/*
    "Gozer the Traveller - he will come in one of the pre-chosen forms.
    During the rectification of the Vuldronaii, the Traveller came as a
    large and moving Torb! Then, during the third reconciliation of the
    last of the Meketrex supplicants, they chose a new form for him -
    that of a giant Sloar!  Many Shubs and Zuuls knew what it was to be
    roasted in the depths of a Sloar that day, I can tell you!"
*/


}); // document ready func

