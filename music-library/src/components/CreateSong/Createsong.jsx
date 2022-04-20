import React, { useState } from 'react';



const CreateSong = (props) => {


        const [title, setTitle] = useState('')
        const [artist, setArtist] = useState('')
        const [album, setAlbum] = useState('')
        const [release_date, setRelease_Date] = useState('')
        const [genre, setGenre] = useState('')

        function handleSubmit(submissionForm){
            submissionForm.preventDefault();
            let newEntry = {
                title: title,
                artist: artist,
                album: album,
                release_date: release_date,
                genre: genre, 
            };
            console.log(newEntry)
            props.createSong(newEntry)
        }

       
    return (
        <div className='test'>
            <form className='newSong' onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <label>Artist:</label>
                <input type='Artist' value={artist} onChange={(e) => setArtist(e.target.value)}/>
                <label>Album:</label>
                <input type='Album' value={album} onChange={(e) => setAlbum(e.target.value)}/>
                <label>Release Date:</label>
                <input className='inputDate' type='date' value={release_date} onChange={(e) => setRelease_Date(e.target.value)}/>
                <label>Genre</label>
                <input type='Genre' value={genre} onChange={(e) => setGenre(e.target.value)}/>
                <button type='submit'>Add Song</button>
               


            </form>
           
        </div>
    )
}

export default CreateSong