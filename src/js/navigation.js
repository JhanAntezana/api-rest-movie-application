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
    }else if(location.hash.startsWith('#categories')){
        categoriesPage();
    }else{
        homePage();
    }
}

homePage = ()=>{
    console.log('principal');
    getTerndingMoviesPreview();
    getCategoryMovies();
}
categoriesPage = ()=>{
    console.log('categories page');
}
movieDetailsPage = ()=>{
    console.log('Movieeeeee');
}
serachPage = ()=>{
    console.log('Searching');
}
trendsPage = ()=>{
    console.log('Trends!! upa upa');
}
