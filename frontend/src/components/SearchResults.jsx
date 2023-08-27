import React, { useEffect } from 'react'


function SearchResults({ queryResults, onChange}) {
  
  return (
    <>
    <div className='search-results'>
        {
            queryResults.map((result, id) => {
                return <div key={id} className='country-item' onClick={(e) => onChange("from", `${result.country}`)}>{result.country}</div>
            })
        }
    </div>
    </>
  )
}

export default SearchResults