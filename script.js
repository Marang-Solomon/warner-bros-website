document.addEventListener('DOMContentLoaded', () => {
  const movieList = document.querySelector('.movie-list');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');
  const movieListItems = document.querySelectorAll('.movie-list-item');
  const maxMovies = 10; 

  let currentIndex = 0;

  function updateMovieList() {
    const itemWidth = movieListItems[0].offsetWidth;
    const itemsVisible = Math.floor(movieList.offsetWidth / itemWidth);
    const maxIndex = maxMovies - itemsVisible;

    if (currentIndex < 0) {
      currentIndex = maxIndex;
    }
    if (currentIndex > maxIndex) {
      currentIndex = 0;
    }

    const translateX = -currentIndex * itemWidth;
    movieList.style.transform = `translateX(${translateX}px)`;
  }

  leftArrow.addEventListener('click', () => {
    currentIndex--;
    updateMovieList();
  });

  rightArrow.addEventListener('click', () => {
    currentIndex++;
    updateMovieList();
  });
  updateMovieList();
});

document.addEventListener('DOMContentLoaded', () => {
  const genreTables = document.querySelectorAll('.genre-table');
  
  genreTables.forEach(table)


});

document.getElementById('searchButton').addEventListener('click', function() {
  alert('Search button clicked!');
});