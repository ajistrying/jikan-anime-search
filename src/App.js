import React, { useState } from 'react';
import jikanjs from 'jikanjs'; // Uses per default the API version 3
import './App.css';
import SearchForm from './components/SearchForm';
import AnimeInfoCard from './components/AnimeInfoCard'

function App() {

  const [animeList, setAnimeList] = useState([]);

  const searchJikanAPI = async function(searchTerm) {
    const { results } = await jikanjs.search('anime', searchTerm, null, {limit: 20, type: 'tv'});
    const relevantAnimeData = results.map( result => {
      const animeInfo = {
        id: result.mal_id,
        title: result.title,
        episodes: result.episodes,
        image_url: result.image_url,
        rated: result.rated,
        score: result.score,
        start_date: result.start_date,
        end_date: result.end_date,
        synopsis: result.synopsis,
        url: result.url,
        airing: result.airing
      }
       return animeInfo;
    })
    setAnimeList(relevantAnimeData);
  };

  const listOfAnimesReturned = animeList.map( resource => 
    <AnimeInfoCard key={resource.id} animeEntry={resource}/>
  )

  return (
    <div className="container">
      <section className="section">
       <SearchForm searchJikanAPI={searchJikanAPI}/>
      </section>
      <section className="section">
        <h1 className="title is-3"> Available Seasons </h1>
        <h2 className="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading.
        </h2>
      </section>
      <div className="columns is-multiline">
        {listOfAnimesReturned}
      </div>
    </div>
  );
}

export default App;
