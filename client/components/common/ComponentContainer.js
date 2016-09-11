import React from 'react'

let styles = {
  body: {
      padding: '5px',
      clear: 'both'
  }
}

class ComponentContainer extends React.Component {
  render () {
    return (
        <div style={styles.body}>
          {this.props.children}
        </div>
    )
  }
};

export default ComponentContainer;
