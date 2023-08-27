import React from 'react'

function SearchResults2({ queryResults2, onChange}) {
  return (
    <>
    <div className='search-results'>
        {
            Object.values(queryResults2).map((result, id) => {
                return <div key={id} className='country-item' onClick={() => onChange("to", `${result.country}`)}>{result.country}</div>
            })
        }
    </div>
    </>
  )
}

export default SearchResults2