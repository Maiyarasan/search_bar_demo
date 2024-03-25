import React, { useState } from 'react'

const SearchBox = ({onSearch}) => {
    
    const [input , setInput]= useState("")
    
    const handleSearch = (e) => {
      setInput(e.target.value);
      onSearch(e.target.value);
    };
    
   
    
  return (
    <div className='flex items-center justify-between mr-auto absolute top-2 right-0'>
    <div className='flex items-center '>
      <div className="flex items-center ml-auto justify-between rounded-md p-2">
        <input
          type="text"
          className="outline-none w-56 rounded-m py-2 px-4 rounded-lg"
          placeholder="Search..."
          value={input}
          onChange={handleSearch}
        />
      </div>
    </div>
  </div>
    
  )
}

export default SearchBox