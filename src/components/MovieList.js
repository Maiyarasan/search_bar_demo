import React, { useEffect, useState } from 'react'


const MovieList = ({searchInput}) => {
    const [movieList , setMovieList]=useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const getMovie=()=>{
        fetch("https://api.themoviedb.org/3/discover/movie?api_key=4a85a180a6be5c59cf1ea8347bdb0c2f")
        .then((response) => response.json())
      .then((json) => {
        setMovieList(json.results);
        
      })
      .catch((error) => console.error('Error fetching movies:', error));
  };
  useEffect(()=>{
    getMovie()
},[])
useEffect(() => {
    const filtered = movieList.filter((movie) =>
      movie.title.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredMovies(filtered);
  }, [searchInput, movieList]);
        
    
  return (
    
    <div className='flex flex-wrap justify-center px-2 py-2'>
    {filteredMovies.map((movie) => (
        <img
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          className='flex space-x-2 w-80 max-h-70 ml-2 mb-2'
          alt={movie.title}
        />
      ))}
    
    </div>
  )
}

export default MovieList