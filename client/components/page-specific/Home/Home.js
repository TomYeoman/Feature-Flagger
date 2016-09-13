
import HeaderSmall from '../../common/HeaderSmall';
import HeaderLarge from '../../common/HeaderLarge';
import LightHeader from '../../common/LightHeader';
import FeatureItem from '../../common/FeatureItem';
import features from '../../data/features'

import React from 'react'
var socket = io.connect();

export default class Home extends React.Component{

  constructor(props) {
      super(props);

      let featureObj = {}
      let tempFeatureArr = [];

      for (var key in features) {
          if (features.hasOwnProperty(key)) {
              // do stuff
              let featureObj = {
                name: features[key].name,
                description: features[key].description,
                flag: features[key].flag,
                getFeedback: features[key].feedback,
                publicApi: key
              }
              tempFeatureArr.push(featureObj);
          }
      }
      console.log("AYYY");
      console.log(tempFeatureArr);

      this.state = {
          featureArr: tempFeatureArr,
          test: ""
      }

      // Bind the state to our function
      this._updateFeature = this._updateFeature.bind(this)
      this._sendFeatures = this._sendFeatures.bind(this)

  }

  componentDidMount() {
      socket.on('connection', function (socket){
      socket.on('requestFeatures', this._sendFeatures);

    }
  }

  _updateFeature(name, state){
    console.log(`Name = ${name}, State = ${state}`);
    console.log(this.state.featureArr);
    socket.emit('sendFeatures', this.state.featureArr);
  }

  _sendFeatures() {
    socket.emit('sendFeatures', this.state.featureArr);
  }

  render () {

    console.log(this.state.featureArr);

    let FeatureList = this.state.featureArr.map((feature) => {
      console.log("looping");
      console.log(feature.name);
      return (
          <FeatureItem
            title={feature.name}
            description={feature.description}
            flag={feature.flag}
            getFeedback={feature.getFeedback}
            publicApi={feature.publicApi}
            updateFeature={this._updateFeature}
          />
      );
    });

    console.log(FeatureList);

    return (
        <div>
            <HeaderSmall
              text = "Control Panel"
              align = "center"
            />
          <hr />

          <div className="form-group">
              <button className="btn btn-primary btn-lg pull-right"> Add Feature </button>
          </div>
          <hr />
          {FeatureList}

        </div>
    )
  }
};
