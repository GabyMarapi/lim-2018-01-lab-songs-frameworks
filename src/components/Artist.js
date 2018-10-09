import React from 'react'

const cardStyle = {
    textAlign: 'center',
}
const imgStyle = {
    width: '100%',
    height: '300px'
}
const liSongs = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}
const cardTitleStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}
const Artist = ({ data, onNext, onPrevious, onLike, onUnlike }) => {
    const listSong = data.songs.map((song, i) =>
        <li key={i} className="list-group-item" style={liSongs}>
            <h6>{song.name}</h6>
            <div>
                <button 
                id={i}
                type="button"
                className="btn btn-light btn-sm"
                onClick={(e) => {
                    onLike(e.target.id)
                }}>
                <i id={i} className="far fa-heart"></i></button>
                <button 
                id={i}
                type="button" 
                className="btn btn-light btn-sm"
                onClick={(e) => {
                    onUnlike(e.target.id)
                }}>
                <i id={i} className="far fa-thumbs-down"></i></button>
                <button type="button" className="btn btn-light btn-sm" disabled>{song.like}</button>
            </div>
        </li>
    )
    return (
        <div key={data.artist} className="card" style={cardStyle}>
            <div>
                <img className="card-img-top" src={data.image} style={imgStyle} alt='300px' />
            </div>
            <div className="card-body" style={cardTitleStyle}>
                <button
                    type="button"
                    className="btn btn-light btn-sm"
                    onClick={() => {
                        onPrevious()
                    }}>
                    <i className="fas fa-angle-double-left"></i></button>
                <h5 className="card-title">{data.artist}</h5>
                <button
                    type="button"
                    className="btn btn-light btn-sm"
                    onClick={() => {
                        onNext()
                    }}>
                    <i className="fas fa-angle-double-right"></i></button>
            </div>
            <ul className="list-group list-group-flush">
                {listSong}
            </ul>
        </div>
    )
}


export default Artist