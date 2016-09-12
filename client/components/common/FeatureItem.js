import React from 'react'
import Switch from 'react-toggle-switch'

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
  },
  featureTitle: {
    fontWeight: "bold"
  }
};

class FeatureItem extends React.Component {
  constructor(props) {
    super(props);
    console.log("props");
    console.log(props);
    this.state = {on: props.flag};
  }

  _toggleFeature(name) {
    this.props.updateFeature(name);
  }

  render () {
    let buttonName = name
    return (
      <div className="clearfix header-large text-center">
        <hr/>
        <div className="col-xs-3">
          <span style={styles.featureTitle}> {this.props.title} </span>
        </div>
        <div className="col-xs-3">
          <span style={styles.description}> {this.props.description} </span>
        </div>
        <div className="col-xs-3">
          <div className="example-usage">
            <p>Switch state: {this.state.on ? 'On' : 'Off'}</p>
             <Switch className={styles.featureTitle} onClick={this._toggleFeature.bind(this, this.props.publicApi)} on={this.state.on}/>
          </div>

        </div>

        <hr/>
      </div>
    )
  }
};

export default FeatureItem;
