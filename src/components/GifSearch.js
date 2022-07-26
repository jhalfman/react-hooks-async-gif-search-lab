import React, {useState} from 'react'

const GifSearch = ( {handleSubmit} ) => {
    const [searchForm, setSearchForm] = useState("");

    function updateSearch(e) {
        setSearchForm(e.target.value);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label name="search">Enter a Search</label>
            <input type="text" name="search" placeholder='Giphy Search' onChange={updateSearch} value={searchForm}/>
            <input type="submit" value="Search"></input>
        </form>
    </div>
  )
}

export default GifSearch