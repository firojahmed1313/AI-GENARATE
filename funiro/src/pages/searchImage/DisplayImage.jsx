import React from 'react'
import "./searchImage.css"


const DisplayImage = ({urlData}) => {
    
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