import './App.css'
import React, { useEffect, useState } from "react"
import Login from "./Login"
import { getTokenFromUrl } from './spotify'
import SpotifyWebApi from "spotify-web-api-js"
import Player from './Player'
import { useDataLayerValue } from './DataLayer'

const spotify = new SpotifyWebApi();

function App() {
  const [token, setToken] = useState(null);
  const [{}, dispatch] = useDataLayerValue();
  //run code based on given condition
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token){
      setToken(_token)

      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        console.log('♥', user);
      })
    }
  }, []);

  return (
    <div className="app">
      {/* Spotify logo */}
      {/* Login with spotify button */}
      {token ? <Player /> : <Login />}
    </div>
  );
}

export default App;
