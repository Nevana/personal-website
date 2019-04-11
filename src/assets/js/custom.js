window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}
function toggleFunction() {
    var x = document.getElementById("smallNavbar");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
let counter = 0;
function myProgress() {
    let elem = document.getElementById("myProgress");   
    if(counter == 0){
        elem.style.width = 26 + '%';
        document.getElementById("myLifeDesc").innerHTML = "(2005-2009) Elementary School </br>"
        counter++;
    }else if(counter == 1){
        elem.style.width = 61 + '%';
        document.getElementById("myLifeDesc").innerHTML += "(2009-2015) Middle School </br>"
        counter++;
    }else if(counter == 2){
        elem.style.width = 83 + '%';
        document.getElementById("myLifeDesc").innerHTML += "(2015-2018) Education as IT-Specialist @Deutsche Telelekom AG Darmstadt </br>"
        counter++;
    }else if(counter == 3){
        elem.style.width = 99 + '%';
        document.getElementById("myLifeDesc").innerHTML += "(2018-now) Employee as IT-Specialist & Developer @SST-IT Services AG Frankfurt </br>"
        counter++;
    }else if(counter == 4){
        elem.style.width = 100 + '%';
        document.getElementById("myLifeDesc").innerHTML += "(2018-now) Student to finish my highschool @Abendgymnasium Heppenheim </br>"
        //document.getElementById("desire").innerHTML = "Reset"
        counter++;
    }else{
        /*
        elem.style.width = 0 + '%';
        document.getElementById("myLifeDesc").innerHTML = "My life"
        document.getElementById("desire").innerHTML = "Desire my life"
        counter = 0;
        */
    }
    
}
$("nav").find("a").click(function(e) {
    e.preventDefault();
    var section = $(this).attr("href");
    $("html, body").animate({
        scrollTop: $(section).offset().top
    });
});
