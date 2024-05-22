document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  // Function to handle button alerts
  const showAlert = (message) => alert(message);

  // Functionality for the search button
  const searchButton = document.querySelector('.btn1');
  if (searchButton) {
    searchButton.addEventListener('click', () => {
      showAlert('Search functionality coming soon!');
    });
  } else {
    console.log('Search button not found');
  }

  // Functionality for the arrows in the movie lists
  const arrows = document.querySelectorAll('.arrow');
  const movieLists = document.querySelectorAll('.movie-list');

  if (arrows.length === 0) {
    console.log('No arrows found');
  }
  
  arrows.forEach((arrow, i) => {
    const movieList = movieLists[i];
    if (movieList) {
      const movieItems = movieList.querySelectorAll('.movie-list-item').length;
      let clickCounter = 0;

      arrow.addEventListener('click', () => {
        const ratio = Math.floor(window.innerWidth / 900);
        clickCounter++;
        const maxScrolls = movieItems - (4 + clickCounter) + (4 - ratio);
        console.log('Movie items:', movieItems);
        console.log('Click counter:', clickCounter);
        console.log('Max scrolls:', maxScrolls);

        if (maxScrolls >= 0) {
          const currentTransform = getComputedStyle(movieList).transform;
          console.log('Current transform:', currentTransform);

          // Extracting current translateX value
          let currentTranslateX = 0;
          if (currentTransform !== 'none') {
            const matrix = currentTransform.match(/matrix\((.+)\)/)[1].split(', ');
            currentTranslateX = parseFloat(matrix[4]);
          }

          const newTranslateX = currentTranslateX - 300;
          console.log('New translateX:', newTranslateX);

          movieList.style.transform = `translateX(${newTranslateX}px)`;
        } else {
          movieList.style.transform = 'translateX(0)';
          clickCounter = 0;
        }
      });
    } else {
      console.log(`Movie list at index ${i} not found`);
    }
  });

  // Adding functionality to 'MORE INFO' and 'PLAY' buttons
  const moreInfoButtons = document.querySelectorAll('.featured-button');
  if (moreInfoButtons.length === 0) {
    console.log('No featured buttons found');
  }

  moreInfoButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const buttonType = event.target.textContent.trim();
      if (buttonType === 'MORE INFO') {
        showAlert('More info functionality coming soon!');
      } else if (buttonType === 'PLAY') {
        showAlert('Play functionality coming soon!');
      }
    });
  });
  

  // Adding functionality to 'Recently Added' and 'Watch' buttons
  const watchButtons = document.querySelectorAll('.movie-list-item-button');
  if (watchButtons.length === 0) {
    console.log('No watch buttons found');
  }

  watchButtons.forEach((button) => {
    button.addEventListener('click', () => {
      showAlert('Watch functionality coming soon!');
    });
  });

});
