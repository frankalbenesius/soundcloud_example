import React from 'react'
import { css } from 'glamor'

const styles = css({
  fontFamily: "'Open Sans', sans-serif",
  fontWeight: 'bold',
  fontSize: '1.5rem',
  margin: '1rem 0',
})

const Heading = ({ children }) => (
  <div className={styles}>{children}</div>
)
Heading.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Heading
