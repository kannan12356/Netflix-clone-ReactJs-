import React, { useState, useEffect } from 'react'
import './Banner.css'
import axios from '../axios';
import { API_KEY, imageUrl } from '../constants';

function Banner() {
    const [banner, setBanner] = useState([])

    useEffect(() => {
        axios.get(`trending/all/day?api_key=${API_KEY}`).then(response=>{
            setBanner(response.data.results[Math.floor(Math.random() * response.data.results.length)]);
        })
    }, [])

    return (
        <div className='banner'>
            <div className='banner-img'>
                <img 
                    src={banner ? imageUrl+banner.backdrop_path : ''}
                    alt='banner-img'
                    />
            </div>
            <div className='banner-details'>
                <h1>{banner.original_title}</h1>
                <button className='banner-btn'>Play</button>
                <button className='banner-btn'>My List</button>
                <p className='banner-overview'>{banner.overview}</p>                
            </div>
            <div className='banner-footer'></div>
        </div>
    )
}

export default Banner
