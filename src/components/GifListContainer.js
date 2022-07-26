import React, {useState, useEffect} from 'react'
import GifList from './GifList';
import GifSearch from './GifSearch';

const GifListContainer = () => {

    const URL = `https://api.giphy.com/v1/gifs/search?q=dolphin&api_key=CXq600yKOhgTSYvsaC90iKdjjTc6P5sD&rating=g`;

    const [gifs, setGifs] = useState([]);


    useEffect(() => {
        fetch(URL)
        .then(resp => resp.json())
        .then(data => setGifs(data.data.slice(0,3)))
    }, []);

    function handleSearchSubmit(e) {
        e.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?q=${e.target.search.value}&api_key=CXq600yKOhgTSYvsaC90iKdjjTc6P5sD&rating=g`)
        .then(resp => resp.json())
        .then(data => setGifs(data.data.slice(0,3)))
    }

  return (
    <div>
        <GifList gifs={gifs} />
        <GifSearch handleSubmit={handleSearchSubmit}/>
    </div>
  )
}

export default GifListContainer