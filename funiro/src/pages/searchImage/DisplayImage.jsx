import React, { useEffect, useState } from 'react'
import axios from "axios"
import "./searchImage.css"


const DisplayImage = () => {
    const [urlData, setUrlData] = useState();
    const url = "https://api.unsplash.com/search/photos?page=1&query=car&client_id=P5nEHiXSdgh6OZttsMSEAF51TN9BU_Om9xaon5TrPkg";
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
    }, [])
    console.log(urlData)
    return (
        <>
            <div className='imagecontainer'>
                {(urlData)?.map((data) => {
                    return (
                        <>
                            <div className='imagediv'>
                                <img src={data.urls.full} alt={data.alt_description} height="300px" width="342px" />
                            </div>


                        </>
                    )

                }

                )}
            </div>
        </>
    )
}

export default DisplayImage