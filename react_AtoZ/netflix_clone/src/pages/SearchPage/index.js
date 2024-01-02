import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import './SearchPage.css';
import { useDebounce } from '../../hooks/useDebounce';
export default function SearchPage() {

  const navigate = useNavigate();

  const [searchResults, setSearchResults] = useState([]);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }



  let query = useQuery();
  const search = query.get('q');
  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    if (search) {
      fetchSearchMovie(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])

  const fetchSearchMovie = async (search) => {
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${search}`
      )
      console.log(request);
      setSearchResults(request.data.results);
    } catch (error) {
      console.log('error: ' + error)
    }
  };

  const renderSearchResults = () => {
    return searchResults.length > 0 ? (
      <section className='search_container'>
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_tyoe !== 'person') {
            const movieImageUrl =
              'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
            return (
              <div className='movie' key={movie.id}>
                <div
                  className='movie_column_poster'
                  onClick={() => navigate(`/$`)}
                >
                  <img
                    src={movieImageUrl} alt='movie'
                    className='movie_poster'
                  />
                </div>
              </div>
            )
          }
        })}
      </section>
    ) : (
      <section className='no_results'>
        <div className='no_results_text'>
          <p>
            찾고자하는 검색어" {debouncedSearchTerm}"에 맞는 영화가 없습니다.
          </p>

        </div>
      </section>
    )
  }
  return renderSearchResults();
}
