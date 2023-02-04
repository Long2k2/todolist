import React from "react"
import { FiSearch } from 'react-icons/fi';
const Search = ({handleSearch}) => {
    return (
        <div className="search">
            <FiSearch />
            <input
                onChange={e =>(
                    handleSearch(e.target.value)
                )}
                placeholder="Search"
            />
        </div>
    )
}

export default Search;