import React, { Component } from 'react';
import './App.css';
// import Example from './components/Example';
import Artist from './components/Artist';
// import Songs from './components/Songs';

// import { Button } from 'reactstrap';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
      currentIndex: 39
    }
  }

  componentWillMount() {
    const apiArtist = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=5c8e2c09c2a2396e6d24a126d15464fc&format=json';
    fetch(apiArtist)
      .then(response => response.json())
      .then(result => {
        Promise.all(result.artists.artist.map(elem => {
          return fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${elem.name}&api_key=5c8e2c09c2a2396e6d24a126d15464fc&format=json`)
            .then(response => response.json())
        })
        ).then(values => {
          const dataLabSongs = values.map((elem, i) => {
            return {
              artist: result.artists.artist[i].name,
              image: result.artists.artist[i].image[4]['#text'],
              songs: elem.toptracks.track
                .filter(elemSong => elemSong['@attr'].rank <= 10)
                .map(elemSong => { return {name: elemSong.name, like : 0} }),
            }
          })
          this.setState({
            data: dataLabSongs
          })
          
        }
        )
      })
  }

  handleNext(){
    this.setState({
      currentIndex : this.state.currentIndex + 1
    })
  }
  handlePrevious(){
    this.setState({
      currentIndex : this.state.currentIndex - 1
    })
  }
  handleUnlike(){
    const {data, currentIndex} = this.state
    data[currentIndex].songs.like  -= 1
    this.setState({
      data
    })
  }
  handleLike(){
    const {data, currentIndex} = this.state
    data[currentIndex].songs.like  += 1
    this.setState({
      data
    })
  }
  render() {
    const appStyle = {
      margin:'auto',
      width: '50%',
      
    }
    const {data, currentIndex} = this.state
    const a = data.map((elm,i)=> 
    <div key = {i} style={appStyle}>
    <Artist 
    data={elm} 
    onNext={this.handleNext.bind(this)} 
    onPrevious={this.handlePrevious.bind(this)}
    onUnlike={this.handleUnlike.bind(this)} 
    onLike={this.handleLike.bind(this)} 
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
