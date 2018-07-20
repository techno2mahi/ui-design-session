const addMovieToCollectionController = () => {
  alert('Add movie to collection');
};


function createMovieCard(movie) {
  const movieCard = createHTMLElement(`
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22286%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20286%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164b6938cad%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164b6938cad%22%3E%3Crect%20width%3D%22286%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22107.21875%22%20y%3D%2295.7%22%3E286x180%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">${movie.description}</p>
        <button href="#" class="addBtn btn btn-primary">Add</button>
      </div>
    </div>
  `);

  const addButton = movieCard.querySelector('button');
  addButton.addEventListener('click', addMovieToCollectionController);

  return movieCard;
}

function _moviesCollection(document, movies) {
  const collection = document.createElement('div');
  movies.forEach(movie => {
    collection.appendChild(createMovieCard(movie));
  });

  return collection;
}

const moviesCollection = _moviesCollection.bind(null, document);

function createHTMLElement(html) {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template.content.firstElementChild;
}

const movieCard = createMovieCard({
  title: 'Pirates of Caribbean: Dead Man\'s Chest',
  description: 'A short description of the movie'
});

document.getElementById('app').appendChild(movieCard);