const addBtn = document.getElementById("add-modal");
const Button = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");
const cancelForm = addBtn.querySelector(".btn--passive");
const addForm = cancelForm.nextElementSibling;
const userInput = addBtn.querySelectorAll("input");
const entryText = document.getElementById("entry-text");

const movies = [];

function updateUI() {
    if (movies.length === 0) {
        entryText.style.display = "block";
    } else {
        entryText.style.display = "none";
    }
}

function addNewMovie(title, image, rating) {
    const movieElement = document.createElement("li");
    movieElement.className = "movie-element";
    movieElement.innerHTML = `
    <div class = "movie-element__image">
        <img src="${image}" alt="${title}">
    </div>
    <div class="movie-element__info">
        <h2>${title}</h2>
        <p>${rating}/6 STARS</p>
    </div>
    `;
    const movieList = document.getElementById("movie-list");
    movieList.append(movieElement);
}

function backdropToggle() {
    backdrop.classList.toggle("visible");
}

function LayoutForm() {
    addBtn.classList.toggle("visible");
    backdropToggle();
}

function backdropHandler() {
    LayoutForm();
}

function clickCancel() {
    LayoutForm();
}

function clearInput() {
    for (const input of userInput) {
        input.value = "";
    }
}

function addFormInput() {
    const MovieTitle = userInput[0].value;
    const ImgUrl = userInput[1].value;
    const rating = userInput[2].value;

    if (MovieTitle.trim() === "" || ImgUrl.trim() === "" || rating.trim() === "" || rating > 6 || rating < 1) {
        alert("Please enter valid input (Rating between 1 and 6)");
        return;
    }

    const addMovie = {
        title: MovieTitle, img: ImgUrl, rating: rating
    };

    movies.push(addMovie);
    console.log(movies);
    LayoutForm();
    clearInput();
    addNewMovie(addMovie.title, addMovie.img, addMovie.rating);
    updateUI();
}


Button.addEventListener("click", LayoutForm);
cancelForm.addEventListener("click", clickCancel);
backdrop.addEventListener("click", backdropHandler);
addForm.addEventListener("click", addFormInput);