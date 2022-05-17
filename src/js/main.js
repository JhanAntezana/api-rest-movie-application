const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    params: {
      'api_key': API_KEY,
    },
  });

async function getTerndingMoviesPreview(){
    const {data} = await api('/trending/movie/day');

    const movies = data.results;
    console.log(movies);
    const trendingPreviewContainer = trendingPreviewMovieList;
    movies.forEach(movie => {
        const movieContainer = document.createElement('div');
        const movieImg = document.createElement('img');

        movieContainer.classList.add('movie-container');
        movieImg.className ='movie-img';
        movieImg.setAttribute('src','https://image.tmdb.org/t/p/w300'+movie.poster_path);
        
        movieContainer.appendChild(movieImg);
        trendingPreviewContainer.appendChild(movieContainer);
    });


}
//getTerndingMoviesPreview();

getCategoryMovies = async() =>{
    const {data} = await api('/genre/movie/list');
    console.log(data);
    const categories = data.genres;
    const trendingCategoriesContainer = categoriesList;
    categories.forEach(category => {
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'category-container';
        const categoryIcon = document.createElement('div');
        categoryIcon.className = `category-icon ${category.name}`;
        categoryIcon.id = 'id'+category.id;
        const categoryIconImg = document.createElement('i');
        categoryIconImg.className = 'fa-solid fa-clapperboard';
        const categoryTitle = document.createElement('h3');
        categoryTitle.classList.add('category-title');
        categoryTitle.setAttribute('id',category.name);
        const categoryTitleText = document.createTextNode(category.name);

        categoryIcon.appendChild(categoryIconImg);
        categoryTitle.appendChild(categoryTitleText);
        categoryContainer.appendChild(categoryIcon);
        categoryContainer.appendChild(categoryTitle);
        trendingCategoriesContainer.appendChild(categoryContainer);
    });

}
//getCategoryMovies();