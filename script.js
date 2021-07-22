/*----- Collection -----*/
function viewDetails(watchdiv, watchbtn) {
    var wd = document.getElementById(watchdiv);
    var wb = document.getElementById(watchbtn);
    if (wd.style.display === "none") {
      wd.style.display = "block";
      wb.innerHTML = "Show Less";
    } else {
      wd.style.display = "none";
      wb.innerHTML = "View Details";
    }
}

