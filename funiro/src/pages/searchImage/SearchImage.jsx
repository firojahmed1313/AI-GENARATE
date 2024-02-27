import React, { useEffect, useState } from 'react'
import "./searchImage.css"
import axios from "axios"
import DisplayImage from './DisplayImage';
const SearchImage = () => {
  const [searchitem, setsearchitem] = useState("");
  const [urlData, setUrlData] = useState();
  const url = `https://api.unsplash.com/search/photos?page=1&query=${searchitem}&client_id=P5nEHiXSdgh6OZttsMSEAF51TN9BU_Om9xaon5TrPkg`;
  console.log(url);
  useEffect(() => {

    const urlget = async () => {
      try {
        const data = await axios.get(url);
        console.log(data.data.results[0].urls);
        setUrlData(data.data.results);
      } catch (error) {
        console.warn(error);
      }

    }

    urlget();
  }, [searchitem])
  console.log(urlData)
  console.log(searchitem);
  return (
    <>
      <div className='container'>
        <h2>Enter Keyword For Search : </h2>
        <div className='searchItemdiv'>
          <input
            placeholder='Enter Keyword'
            className='inputSearch'
            name='searchitem'
            type='text'
            value={searchitem}
            onChange={(e) => setsearchitem(e.target.value)}
          />
        </div>
        <DisplayImage urlData={urlData} />
      </div>
    </>
  )
}

export default SearchImage