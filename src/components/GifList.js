import React from 'react'

const GifList = ({gifs}) => {
  return (
    <ul>
        {gifs.map(gif => {
            return (
                <li key={gif.id}>
                    <img src={gif.images.original.url} alt="gif"></img>
                </li>
            )
        })}
    </ul>
  )
}

export default GifList