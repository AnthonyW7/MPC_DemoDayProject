//getting references
let presentSearch = document.getElementById("presentSearch");
let presentHome = document.getElementById("presentHome");
let searchRef = document.getElementById("search");
let homeRef = document.getElementById("homePage");
let topBarHome = document.getElementById("home");
let topBarSearch = document.getElementById("searchButton");
let searchBarRef = document.getElementById("searchBar");

//assigning variables for the arrays where we access the information from
let titleArray = [];
let linkArray = [];
let picArray = [];
let descriptionArray = [];

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

