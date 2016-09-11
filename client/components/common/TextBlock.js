import React from 'react'

let styles = {
  module: {
      padding: '5px',
  },
  quote: {
      fontStyle: 'italic'
  }
}

class Textblock extends React.Component {
  render () {
    return (
        <div style={styles.module}>
			<p className={this.props.classNames} style={styles.header} >{this.props.text}</p>
		</div>
    )
  }
};

export default Textblock;
