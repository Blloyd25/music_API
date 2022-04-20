import React, { useState } from 'react';
import './MainDisplay.css'

const MainDisplay = (props) => {
    return (
        <div className='wrapper'>
            <table className='prettyTable'>
                <thead className='headers'>
                    <td className='hname hcell'>Name</td>
                    <td className='hartist hcell'>Artist</td>
                    <td className='halbum hcell'>Album</td>
                    <td className='hrd hcell'>Release Date</td>
                    <td className='hgenre hcell'>Genre</td>
                </thead>
                <tbody>
                {props.songs && props.songs.map((song, i)=>
                        (
                        <tr key={`entry-row-${i}`}>
                            <td className='name tcell'>{song.title}</td>
                            <td className='artist tcell'>{song.artist}</td>
                            <td className='album tcell'>{song.album}</td>
                            <td className='release_date tcell'>{song.release_date}</td>
                            <td className='genre tcell'>{song.genre}</td>
                        </tr>
                    )
                )}
                </tbody>
            </table>
        </div>
    )
}

export default MainDisplay