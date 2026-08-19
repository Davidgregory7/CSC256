// Array used to store the movie titles
let movies = [];

// Adds a movie to the array
function addMovie() {
    let movieInput = document.getElementById("movieInput");
    let movieTitle = movieInput.value.trim();

    if (movieTitle !== "") {
        movies.push(movieTitle);

        // Clear the input box
        movieInput.value = "";

        // Put cursor back in input box
        movieInput.focus();
    } else {
        alert("Please enter a movie title.");
    }
}

// Sorts and displays all movies
function displayMovies() {
    let movieList = document.getElementById("movieList");

    // Clear the previous display
    movieList.innerHTML = "";

    // Sort movie titles alphabetically
    movies.sort();

    // Display each movie
    for (let i = 0; i < movies.length; i++) {
        let movie = document.createElement("div");

        movie.className = "movie";
        movie.textContent = movies[i];

        movieList.appendChild(movie);
    }
}

// Clears the movie list
function resetMovies() {
    movies = [];

    document.getElementById("movieList").innerHTML = "";
    document.getElementById("movieInput").value = "";
}