import React, { Component } from 'react';
import './App.css';
import Artist from './components/Artist';
import Songs from './components/Songs';
import { Button } from 'reactstrap';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: null,
      currentIndex: 0
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
        ).then(values=>{
          const dataLabSongs = values.map((elem, i) => {
            return {
              artist : result.artists.artist[i].name,
              image : result.artists.artist[i].image[2]['#text'],
              songs : elem.toptracks.track.filter(elemSong=>elemSong['@attr'].rank <= 10).map(elemSong=>elemSong.name),
              like : 0
            }
          })
        console.log(dataLabSongs);
        this.setState({
          data: dataLabSongs
        })
        }
        )
        

        // let objArtist = {}
        // result.similartracks.track.forEach(elem => {
        //   if(!objArtist.hasOwnProperty(elem.artist.name)){
        //     objArtist[elem.artist.name] = {
        //       artist: elem.artist.name,
        //       image : elem.image[2]['#text'],
        //       songs : [elem.name]
        //     }
        //   }
        //   else{
        //     objArtist[elem.artist.name].songs.push(elem.name)
        //   }
        // });
        // const dataSongs = Object.values(objArtist)
      })
  }
  render() {
    return (
      <div className="App">
        <Artist />
        <Songs />
        <Button color="danger">Danger!</Button>
      </div>
    );
  }
}

export default App;
