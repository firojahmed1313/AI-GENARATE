import React from 'react'
import "./home.css"
import data from "./data.json";
const Home = () => {
  console.log(data);
  return (
    <>
      <div className="home">
        {
          data.map((item) => {
            return (
              <div className="homeContainer" key={item.id}>
                <img className="homeImage" src={item.image} alt='summary' />
                <h2 className="homeTitle">{item.title}</h2>
                <button className="homeButton" onClick={() => window.location.href = `${item.url}`}>{item.buttonsText}</button>
              </div>
            )
          }
          )
        }
      </div>
    </>
  )
}

export default Home