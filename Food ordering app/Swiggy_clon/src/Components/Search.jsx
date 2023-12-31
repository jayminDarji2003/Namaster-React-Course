import React from 'react'
import { useState } from 'react'


function Search() {
    const [searchTxt, setSearchTxt] = useState("");

    return (
        <div className='w-96 mt-10 p-5 m-auto flex items-center justify-center bg-orange-400 gap-5 rounded-md'>
            <input
                className='p-2'
                type="text"
                placeholder='search restaurant'
                value={searchTxt}
                onChange={(e) => {
                    setSearchTxt(e.target.value);
                    console.log(e.target.value);
                }}
            />
            <button className='bg-white p-2 w-20 font-bold text-gray-600'>search</button>
        </div>
    )
}

export default Search
