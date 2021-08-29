import React from 'react';

export default function AnimeInfoCard({animeEntry}) {
  return (
    <div id="animeCard" className="card">
      <div class="card-image">
        <figure class="image is-square">
          <a href={animeEntry.url} target='_blank'>
            <img src={animeEntry.image_url} alt="Placeholder"/>
          </a>
        </figure>
      </div>
      <div className="card-content">
        <p className="title is-6">
        {animeEntry.title}
        </p>
        <p className="subtitle">
          Score: {animeEntry.score}
        </p>
        <p>
          Episodes: {animeEntry.episodes}
        </p>
        <p>
          Rating: {animeEntry.rated}
        </p>
        <p>
          Summary: {animeEntry.synopsis}
        </p>
      </div>
    </div>
  );
}