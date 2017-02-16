import React from 'react'
import { css } from 'glamor'

import colors from '../palette'

const styles = css({
  maxWidth: '600px',
  width: '100%',
  backgroundColor: colors.gray[1],
  margin: '1rem auto',
  padding: '1rem',
  boxShadow: `0px 3px 1px -1px ${colors.gray[6]}`,
})

const Wrapper = ({ children }) => (
  <div className={styles}>{children}</div>
)
Wrapper.propTypes = {
  children: React.PropTypes.node.isRequired,
}

export default Wrapper
