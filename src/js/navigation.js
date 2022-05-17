window.addEventListener('DOMContentLoaded',navigator, false);//navigator-> esta función se llamará en la primera carga.
window.addEventListener('hashchange',navigator, false);//luego el navigator->funcion que se ejecutará cada vez que cambie el hash

function navigator (){
    console.log({location});
    if(location.hash.startsWith('#trends')){
        trendsPage();
    }else if(location.hash.startsWith('#search=')){
        serachPage();
    }else if(location.hash.startsWith('#movie=')){
        movieDetailsPage();
    }else if(location.hash.startsWith('#category=')){
        categoriesPage();
    }else{
        homePage();
    }
}

homePage = ()=>{
    console.log('principal');
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    headerArrow.classList.add('inactive');
    headerArrow.classList.remove('header-arrow--white');
    headerTitle.classList.remove('inactive');
    headerTitleCategoryView.classList.add('inactive');
    sectionForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesSection.classList.remove('inactive');
    genericListSection.classList.add('inactive');
    movieDetailsSection.classList.add('inactive');

    getTerndingMoviesPreview();
    getCategoryMovies();
}
categoriesPage = ()=>{
    console.log('categories page');
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    headerArrow.classList.remove('inactive');
    headerArrow.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerTitleCategoryView.classList.remove('inactive');
    sectionForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesSection.classList.add('inactive');
    genericListSection.classList.remove('inactive');
    movieDetailsSection.classList.add('inactive');
}
movieDetailsPage = ()=>{
    console.log('Movieeeeee');
    headerSection.classList.add('header-container--long');
    //headerSection.style.background = '';
    headerArrow.classList.remove('inactive');
    headerArrow.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerTitleCategoryView.classList.remove('inactive');
    sectionForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesSection.classList.add('inactive');
    genericListSection.classList.add('inactive');
    movieDetailsSection.classList.remove('inactive');
}
serachPage = ()=>{
    console.log('Searching');
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    headerArrow.classList.remove('inactive');
    headerArrow.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerTitleCategoryView.classList.remove('inactive');
    sectionForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesSection.classList.add('inactive');
    genericListSection.classList.remove('inactive');
    movieDetailsSection.classList.add('inactive');
}
trendsPage = ()=>{
    console.log('Trends!! upa upa');
    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    headerArrow.classList.remove('inactive');
    headerArrow.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerTitleCategoryView.classList.remove('inactive');
    sectionForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesSection.classList.add('inactive');
    genericListSection.classList.remove('inactive');
    movieDetailsSection.classList.add('inactive');
}
