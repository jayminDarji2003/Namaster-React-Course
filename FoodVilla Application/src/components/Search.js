import React, { useState } from 'react'

function Search() {
    const [searchTxt, setSearchTxt] = useState("");
    // we are creating a one state where the initial value is false and if the user clicked on search then do true to variable
    const [isClicked, setIsClicked] = useState("false");

    return (
        <>
            <div className='search-container'>
                <form>
                    <input
                        type="text"
                        className='search-input'
                        placeholder='Search Any Restaurant'
                        value={searchTxt}
                        onChange={(e) => {
                            // e.target.value --> input value
                            setSearchTxt(e.target.value);
                        }}
                    />
                </form>

                <button onClick={() => {
                    setIsClicked("true");
                }}>
                    Search
                </button>
            </div>
        </>

    )
}

export default Search
