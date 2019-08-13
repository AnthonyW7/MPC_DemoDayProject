//This code is only for demp presentations to switch divs before it is set up
let presentSearch = document.getElementById("presentSearch");
let presentHome = document.getElementById("presentHome");
let searchRef = document.getElementById("search");
let homeRef = document.getElementById("homePage");
let topBarHome = document.getElementById("home")
let topBarSearch = document.getElementById("searchButton")

//when the top search div is pressed it shows the search page
topBarSearch.onclick = function(event){
  event.preventDefault();
  homeRef.style.display = "none";
  searchRef.style.display = "block";
}

//when the top home div is pressed it switches to the home div
topBarHome.onclick = function(event){
  event.preventDefault();
  homeRef.style.display = "block";
  searchRef.style.display = "none";
}