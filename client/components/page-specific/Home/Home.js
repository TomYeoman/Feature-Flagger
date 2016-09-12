
import HeaderSmall from '../../common/HeaderSmall';
import HeaderLarge from '../../common/HeaderLarge';
import LightHeader from '../../common/LightHeader';
import FeatureItem from '../../common/FeatureItem';
import features from '../../data/features'

import React from 'react'

export default class Home extends React.Component{

  constructor(props) {
      super(props);
      this.state = {
          featureArr: []
      }

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
      this.setState({ featureArr: tempFeatureArr })
  }

  _updateFeature(color){
    console.log("COLOR" + color);
    console.log(featureArr);
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

          {FeatureList}

        </div>
    )
  }
};
