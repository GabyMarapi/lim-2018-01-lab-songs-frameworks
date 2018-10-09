import React, { Component } from 'react';
import './App.css';
import Artist from './components/Artist';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      currentIndex: 22
    }
  }
  
  componentWillMount() {
    const apiArtist = 'https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=5c8e2c09c2a2396e6d24a126d15464fc&format=json';
    fetch(apiArtist)
      .then(response => response.json())
      .then(result => {
        Promise.all(result.artists.artist.map(elem => {
          return fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${elem.name}&api_key=5c8e2c09c2a2396e6d24a126d15464fc&format=json`)
            .then(response => response.json())
        })
        ).then(values => {
          const dataLabSongs = values.map((elem, i) => {
            return {
              artist: result.artists.artist[i].name,
              image: result.artists.artist[i].image[4]['#text'],
              songs: elem.toptracks.track
                .filter(elemSong => elemSong['@attr'].rank <= 10)
                .map(elemSong => { return { name: elemSong.name, like: elemSong.playcount } })
                .sort((a, b) => a.like < b.like),
            }
          })
          this.setState({
            data: dataLabSongs
          })
        }
        )
      })
  }

  handleNext = () => {
    const { currentIndex, data } = this.state
    if (currentIndex === (data.length - 1)) {
      this.setState({
        currentIndex: 0
      })
    }
    else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      })
    }
  }
  handlePrevious = () => {
    const { currentIndex, data } = this.state
    if (currentIndex === 0) {
      this.setState({
        currentIndex: (data.length - 1)
      })
    }
    else {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      })
    }
  }


  handleUnlike = (index) => {
    const { data, currentIndex } = this.state
    const { like } = data[currentIndex].songs[index]
    if (like !== 0) {
      data[currentIndex].songs[index].like--
      data[currentIndex].songs.sort((a, b) => a.like < b.like)
      this.setState({
        data
      })
    }

  }
  handleLike = (index) => {
    const { data, currentIndex } = this.state
    data[currentIndex].songs[index].like++
    data[currentIndex].songs.sort((a, b) => a.like < b.like)
    this.setState({
      data
    })
  }
  render() {
    const appStyle = {
      margin: 'auto',
      width: '50%',

    }
    const { data, currentIndex } = this.state
    const a = data.map((elm, i) =>
      <div key={i} style={appStyle}>
        <Artist
          data={elm}
          onNext={this.handleNext}
          onPrevious={this.handlePrevious}
          onUnlike={this.handleUnlike}
          onLike={this.handleLike}
        />
        <div>
        </div>
      </div>
    )[currentIndex]

    return (
      <div >
        {a}
      </div>
    );
  }
}

export default App;
