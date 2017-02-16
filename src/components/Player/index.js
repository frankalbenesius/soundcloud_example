import React from 'react'
import { css } from 'glamor'

const styles = css({
  marginTop: '1rem',
})

const Player = ({ uri }) => (
  <div className={styles}>
    <iframe width="100%" height="130" scrolling="no" frameBorder="no" src={`https://w.soundcloud.com/player/?url=${uri}&amp;hide_related=false`} />
  </div>
)
Player.propTypes = {
  uri: React.PropTypes.string.isRequired,
}

export default Player
