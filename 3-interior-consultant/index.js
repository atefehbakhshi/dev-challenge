function openNavbar() {
    document.getElementById("sidebar").style.width="100%";
    document.getElementById("sidebar").style.display="block";
    document.getElementById("header").style.display="none";
    document.getElementById("main").style.display="none";
    document.getElementById("footer").style.display="none";
}
function closeNavbar() {
    document.getElementById("sidebar").style.width="0";
    document.getElementById("header").style.display="block";
    document.getElementById("main").style.display="block";
    document.getElementById("footer").style.display="block";
}