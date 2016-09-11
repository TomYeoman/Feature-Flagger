import React from 'react'

let styles = {
  container: {
    position: 'relative',
    borderBottom: '1px solid black',
    webkitBoxShadow: '0 2px 15px black',
    boxShadow: '0 2px 15px #5B1F69',
    backgroundPosition: '0 -5px',
    padding: '15px 20px 15px 20px',
    backgroundColor:'#E0E1DD',
    backgroundColor: '#565a5c',
    color: '#fff',
  }
}
class HeaderLarge extends React.Component {
  render () {
    return (
      <div style={styles.container} className="clearfix header-large text-center">
        <h1> {this.props.primaryText} </h1>
        <p> {this.props.additionalText} </p>
      </div>
    )
  }
};

export default HeaderLarge;
