const arrowEnd = document.querySelectorAll(".arrowend");
const movieList = document.querySelectorAll(".movie-list");


arrowEnd.forEach((arrow, i) => {
    const itemNumber = Math.floor(window.innerWidth / 200);
    let clickCounter = 0;
    const imageItems = movieList[i].querySelectorAll("img").length;
    arrow.addEventListener("click", function()  {
        clickCounter++;
        if(imageItems - (4 + clickCounter) + (4 - itemNumber) >= 0) {
            movieList[i].style.transform = `translateX(${
                movieList[i].computedStyleMap().get("transform")[0].x.value - 300
            }px)`;

        }else{
            movieList[i].style.transform = "translateX(-400px)";
            clickCounter = 0;
        }
    });
});

// Dark Mode

const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
    ".container, .navbar-wrapper, .sidebar, .sidebar i, .toggle, .toggle-ball,.select-wrapper select, .movie-list-title"
);

ball.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"));
});