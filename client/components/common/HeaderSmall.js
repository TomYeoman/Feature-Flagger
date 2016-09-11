import React from 'react'

let styles = {
  container: {
      background: '#565a5c',
      borderRadius: '5px',
      paddingLeft: '20px',
      color: '#fff',
      padding: '5px',
      paddingLeft: '20px',
      marginTop: '15px',
      marginBottom: '15px',
  },
  header: {
      paddingLeft: '15px',
      textAlign: "center"
  }
}
class HeaderSmall extends React.Component {
  render () {
    return (
        <div style={styles.container} className="clearfix header-small">
			<h3 style={styles.header} >{this.props.text}</h3>
		</div>
    )
  }
};

export default HeaderSmall;
