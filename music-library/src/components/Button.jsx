import React, { useState } from 'react';
import Modal from '../modal/modal';
import './CustomButton.css'
import CreateSong from '../CreateSong/CreateSong';

const Button = (props) => {

    const[hideShow,setHideShow]=useState(false)

    const handleHideShow = () =>{
        setHideShow(!hideShow)
    }


    return(
        <div>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h1 onClick={handleHideShow}>Add Song</h1>
            </a>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h1 onClick={handleHideShow}>Update song</h1>
            </a>
            <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <h1 onClick={handleHideShow}>Delete Song</h1>
            </a>
        <Modal onClick={handleHideShow}hideshow={hideShow}><CreateSong/></Modal>
        </div>
    )
}
export default Button