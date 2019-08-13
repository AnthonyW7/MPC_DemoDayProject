//This code is only for demp presentations to switch divs before it is set up
let presentSearch = document.getElementById("presentSearch");
let presentHome = document.getElementById("presentHome");
let searchRef = document.getElementById("search");
let homeRef = document.getElementById("homePage");
let topBarHome = document.getElementById("home")
let topBarSearch = document.getElementById("searchButton")

//making presentSearch switch from the home div to the search div
presentSearch.onclick = function(event){
  event.preventDefault();
  home.style.display = "none";
  search.style.display = "block";
}

//making presentHome switch from the search div to the home div
presentHome.onclick = function(event){
  event.preventDefault();
  home.style.display = "block";
  search.style.display = "none";
}