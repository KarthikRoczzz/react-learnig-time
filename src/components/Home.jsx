import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'

const Home = () => {
    const navigator = useNavigate();
    const navigateToShopHere = () => {
        navigator('/gallery');
    }
    return (
        <>
        <div className="home-container">
          <div className="home_main">
            <h1>Welcome to the <i>Flower Shop</i></h1>
          <p><i>Your one-stop shop for all things flowers!</i></p>
          <button onClick={navigateToShopHere}><i>Shop Now</i></button>
          </div>
        </div>
        </>
    )
}

export default Home