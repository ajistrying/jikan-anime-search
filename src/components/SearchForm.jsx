import React, { useState } from 'react';

export default function SearchForm({searchJikanAPI}) {

  const [searchTerm, setSearchTerm] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    searchJikanAPI(searchTerm);
    setSearchTerm('');
  };

  function handleChange(event){
    setSearchTerm(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="title is-3">
        <label id="searchFormLabel" htmlFor="anime-input">Enter your favorite anime</label>
      </h2>
      <input 
        id="searchFormInput" 
        className="input is-info" 
        type="text"
        value={searchTerm}
        onChange={handleChange}
      ></input>
      <button id="searchFormButton" className="button is-info" type="submit">Search</button>
    </form>
  );
}