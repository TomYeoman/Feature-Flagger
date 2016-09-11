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
    this.state = {flag: props.flag};
  }

  _submitForm(e) {

    e.preventDefault();
    alert("Trying to send email")
    console.log("ASSD");
  }

  render () {
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

            <Switch onClick={() => {this._submitForm.bind(this)}} on={this.state.flag}/>

          </div>

        </div>

        <hr/>
      </div>
    )
  }
};

export default FeatureItem;
