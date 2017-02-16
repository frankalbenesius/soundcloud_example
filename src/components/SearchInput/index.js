import React from 'react'
import { css } from 'glamor'

import colors from '../palette'

const styles = {
  input: css({
    width: 'calc(100% - 9rem)',
    border: '0',
    fontSize: '1.5rem',
    padding: '0.5rem 1rem',
    boxShadow: `0px 3px 1px -1px ${colors.gray[6]}`,
    margin: '1rem 0',
    lineHeight: '1.5rem',
  }),
  button: css({
    width: '8rem',
    border: '0',
    fontSize: '1.5rem',
    padding: '0.5rem 1rem',
    color: colors.gray[0],
    backgroundColor: colors.orange[5],
    boxShadow: `0px 3px 1px -1px ${colors.gray[6]}`,
    margin: '1rem 0 1rem 1rem',
    lineHeight: '1.7rem',
    ':hover': {
      backgroundColor: colors.orange[6],
    },
  }),
}

class SearchInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange(e) {
    e.preventDefault()
    this.setState({ value: e.target.value })
  }
  handleClick(e) {
    e.preventDefault()
    this.props.onSearch(this.state.value)
  }
  render() {
    return (
      <form>
        <input
          type="text"
          className={styles.input}
          placeholder="Search..."
          value={this.state.value}
          onChange={this.handleChange}
        />
        <input type="submit" className={styles.button} onClick={this.handleClick} value="Search" />
      </form>
    )
  }
}
SearchInput.propTypes = {
}
SearchInput.defaultProps = {
  onSearch: () => {},
}

export default SearchInput
