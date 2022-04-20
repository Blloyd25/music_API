import React, { useState } from 'react';



const DeleteSong = (props) => {


        const [title, setTitle] = useState('')
        const [artist, setArtist] = useState('')
        

        function handleSubmit(submissionForm){
            submissionForm.preventDefault();
            let newEntry = {
                title: title,
                artist: artist,
                 
            };
            console.log(newEntry)
            props.deletesong(newEntry)
        }

       
    return (
        <div className='test'>
            <form className='newSong' onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Artist:</label>
                <input type='Artist' value={artist} onChange={(e) => setArtist(e.target.value)}/>
                
                <button type='submit'>Delete Song</button>
               


            </form>
           
        </div>
    )
}

export default DeleteSong