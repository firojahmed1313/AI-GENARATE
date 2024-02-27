import React, { useEffect, useState } from 'react'
import "./searchImage.css"
import axios from "axios"
import DisplayImage from './DisplayImage';
const SearchImage = () => {
  const [urlData, setUrlData] = useState();
  
  return (
    <>
      <div className='container'>
        <div className='searchItemdiv'>
            <input placeholder='Enter Keyword'  />
        </div>
        <DisplayImage/>
      </div>
    </>
  )
}

export default SearchImage