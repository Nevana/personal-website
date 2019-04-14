window.onscroll = function() {myFunction()}
function myFunction() {
    var navbar = document.getElementById("myNavbar")
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white"
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "")
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
function totopFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
$("nav").find("a").click(function(e) {
    e.preventDefault()
    var section = $(this).attr("href")
    $("html, body").animate({
        scrollTop: $(section).offset().top
    })
})
