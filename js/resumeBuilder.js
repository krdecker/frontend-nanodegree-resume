
var bio = {
    "name" : "KR Decker",
    "role" : "Web Developer",
    "contacts" : {
        "email" : "krd.345@gmail.com",
        "github" : "https://github.com/krdecker"
    },
    "welcomeMsg" : ". . . inquisitive mind; . . . relentless enthusiasm; . . . poetic nature.",
    "skills" : [ "Python" , "JavaScript" , "jQuery" , "HTML/CSS" ],
    "bioPic" : "images/krd.png"
};

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

$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);
