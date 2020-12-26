function openLink(evt, val) {
  var i, tabcontent, tablinks, tabcontentIF;
  tabcontentIF = document.getElementsByClassName("tabcontentIF");
  for (i = 0; i < tabcontentIF.length; i++) {
    tabcontentIF[i].style.display = "none";
  }
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(val).style.display = "block";
  evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();