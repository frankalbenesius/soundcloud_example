import React from 'react'
import { css } from 'glamor'

const styles = css({
  marginTop: '1rem',
  cursor: 'pointer',
})

const Player = ({ onClick }) => (
  <button onClick={onClick} className={styles}>
    <img alt="connect to soundcloud" src={`${process.env.PUBLIC_URL}/img/connect.png`} />
  </button>
)
Player.propTypes = {
  onClick: React.PropTypes.func.isRequired,
}

export default Player
