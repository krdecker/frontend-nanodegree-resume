
var bio = {
    "name" : "KR Decker",
    "role" : "Web Developer",
    "email" : "krd.345@gmail.com",
    "github" : "https://github.com/krdecker",
    "pictureURL" : "images/krd.png",
    "welcomeMsg" : ". . . inquisitive mind; . . . relentless enthusiasm; . . . poetic nature.",
    "skills" : " Python; JavaScript; jQuery; HTML/CSS."
};

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedEmail = HTMLemail.replace("%data%", bio.email);
var formattedGitHub = HTMLgithub.replace("%data%", bio.github);
var formattedPictureURL = HTMLbioPic.replace("%data%", bio.pictureURL);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMsg);
var formattedSkills = HTMLskills.replace("%data%", bio.skills);



$("#header").prepend(formattedRole); // LIFO
$("#header").prepend(formattedName);
$("#topContacts").append(formattedEmail);
$("#topContacts").append(formattedGitHub);
$("#topContacts").append(formattedPictureURL);
$("#topContacts").append(formattedWelcomeMsg);

$("#header").append(HTMLskillsStart);
$("#skills").append(formattedSkills);
