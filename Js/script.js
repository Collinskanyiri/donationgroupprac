function displayNavItems() {
    var navToggle = document.getElementById("nav-items");
    if (navToggle.style.display === "block") {
        navToggle.style.display = "none";
    } else {
        navToggle.style.display = "block";
    }
};

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

document.getElementById("volunter-btn").onclick = function() {
    alert("Thank you for voluntering. We will get back to you");
}

document.getElementById("sponsor-btn").onclick = function() {
    alert("Thank you for being a sponsor. We will get back to you");
}
document.getElementById("submit-btn").onclick = function() {
    alert("Thank you for your submission");
};