import React, { useState } from 'react'
import './NavBar.css'


const NavBar=(props)=> {


  return (
    <div className='NavBarWrapper'>
            <h1 className='Title'>Songify</h1>
        <div className='NavBarContainer'>
          <div>
              <a onClick={props.createOnClick} className='add' href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Add Song
            </a>
            <a className='update' href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Update Song
            </a>
            <a className='delete' href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Delete Song
            </a>
          </div>
        </div>    
    </div>
  )
}

export default NavBar