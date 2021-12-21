import axios from '../axios'
import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { API_KEY, imageUrl } from '../constants'
import YouTube from 'react-youtube';


function RowPost() {
    const [posters, setPoster] = useState([])
    const [youtubeId, setYoutubeId] = useState('');

    useEffect(() => {
        axios.get(`discover/movie?api_key=${API_KEY}&language=en-US`).then(response=>{
            setPoster(response.data.results)
        })
    },[])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            autoplay: 1,
        },
    }

    const youtube = (movieId)=>{
        axios.get(`movie/${movieId}/videos?api_key=${API_KEY}&anguage=en-US`).then(response=>{
            
            let videoId = response.data.results[0].key

            if(youtubeId === videoId){
                setYoutubeId('')
                return
            }            
            setYoutubeId(videoId)
        })
    }
    
    return (
        <div className='row-post'>
            <h3 className='poster-head'>Netflix Originals</h3>
            <div className='posters'>
                {
                    posters.map((poster, k)=>{
                        return(
                            <div className='poster' key={k} onClick={()=>youtube(poster.id)}>
                                <img 
                                    src={imageUrl+poster.poster_path}
                                    alt='poster'
                                    />
                                <div className='poster-details'>
                                    <p style={{fontWeight:'bold'}}>{poster.title}</p>
                                    <p className='poster-overview'>{poster.overview}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {
                youtubeId ? <YouTube videoId={youtubeId} opts={opts} /> : ""
            }
        </div>
    )
}

export default RowPost
