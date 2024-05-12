document.addEventListener("DOMContentLoaded", function() {
    var copyrightParagraph = document.getElementById("copyright");
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var myName = "Isaac Cano";
    var myLocation = "US";
    var copyrightText = "© " + currentYear + " " + myName + ", " + myLocation;
    copyrightParagraph.textContent = copyrightText;

    var lastModifiedParagraph = document.getElementById("lastModified");
    var lastModifiedText = "Last modified: " + document.lastModified;
    lastModifiedParagraph.textContent = lastModifiedText;
});