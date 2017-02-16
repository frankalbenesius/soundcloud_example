/* global window */
import React from 'react'
import SC from 'soundcloud'

import ConnectButton from './components/ConnectButton'
import Heading from './components/Heading'
import Player from './components/Player'
import SearchInput from './components/SearchInput'
import Wrapper from './components/Wrapper'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      songs: [],
      authorized: false,
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleConnect = this.handleConnect.bind(this)
    this.search = this.search.bind(this)
  }
  componentWillMount() {
    SC.initialize({
      client_id: 'f2ecb0b71aff52e0f87b181c2cee4df9',
      redirect_uri: 'http://localhost:3000/callback.html',
    })
  }
  handleConnect() {
    SC.connect().then((obj) => {
      this.setState({
        authorized: true,
        token: obj.oauth_token,
      });
    })
  }
  handleInputChange(value) {
    this.setState({ q: value })
  }
  search(val) {
    SC.get('/tracks', { q: val, limit: 5 }).then((songs) => {
      this.setState({ songs })
    })
  }
  render() {
    return (
      <Wrapper>
        <Heading>SoundCloud Audio Search</Heading>
        {this.state.authorized ? (
          <div>
            <SearchInput
              onSearch={this.search}
            />
            {this.state.songs.map((song) => {
              console.log('song', song)
              return <Player key={song.id} uri={song.uri} />
            })}
          </div>
        ) : (
          <div>
            <p>Please authorize with SoundCloud to search tracks.</p>
            <ConnectButton onClick={this.handleConnect} />
          </div>
        )}
      </Wrapper>
    )
  }
}

export default IndexPage
