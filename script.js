 function toggleMenu() {
      document.querySelector('.menu-toggle').classList.toggle('active');
      document.querySelector('nav ul').classList.toggle('active');
    }

    function exploreMovies() {
      document.getElementById('movies').scrollIntoView({ behavior: 'smooth' });
    }
