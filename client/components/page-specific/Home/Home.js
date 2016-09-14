
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

      console.log(`Features: ${features}`);

      // Loop through each feature
      features.map((feature) => {
        // For each filter grab the properties and store in new array (We use this flattened version to draw UI)
        for (var key in feature) {
            if (feature.hasOwnProperty(key)) {
                // do stuff
                let featureObj = {
                  name: feature[key].name,
                  description: feature[key].description,
                  flag: feature[key].flag,
                  getFeedback: feature[key].feedback,
                  publicApi: key
                }
                tempFeatureArr.push(featureObj);
            }
        }
      });

      console.log(tempFeatureArr);

      // Hold our feature list in the application state
      this.state = {
          featureArr: tempFeatureArr,
          test: ""
      }

      // Bind the state to our function
      this._updateFeature = this._updateFeature.bind(this)
      this._sendFeatures = this._sendFeatures.bind(this)

  }



  _updateFeature(name, state){
    console.log(`Name = ${name}, State = ${state}`);
    console.log(this.state.featureArr);
    let featureUpdatePayload = {
      name: name,
      flag: state
    }
    socket.emit('updateFeature', featureUpdatePayload);
  }

  _sendFeatures() {
    socket.emit('sendFeatures', this.state.featureArr);
  }

  render () {

    // Generate Feature list HTML
    let FeatureList = this.state.featureArr.map((feature) => {
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

          <div className="text-center feature-titles">
            <div className="col-xs-3">
              Name
            </div>
            <div className="col-xs-3">
              Description
            </div>
            <div className="col-xs-3">
              API
            </div>

          </div>
          <hr />
          {FeatureList}

        </div>
    )
  }
};
