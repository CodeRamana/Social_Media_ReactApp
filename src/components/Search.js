import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const Search = () => {
  const {search,setSearch} = useContext(DataContext)
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="searchBox">Search</label>
        <input type="search" name="searchPost" id='searchBox' value={search} onChange={(e)=>setSearch(e.target.value)} />
    </form>
  )
}

export default Search