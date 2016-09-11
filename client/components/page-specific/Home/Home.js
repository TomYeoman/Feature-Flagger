
import HeaderSmall from '../../common/HeaderSmall';
import HeaderLarge from '../../common/HeaderLarge';
import LightHeader from '../../common/LightHeader';
import FeatureItem from '../../common/FeatureItem';
import features from '../../data/features'

import React from 'react'

export default class Home extends React.Component{
  constructor(props) {
      super(props);
  }

  render () {


    let featureArr = [];
    let featureObj = {}

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
            featureArr.push(featureObj);
        }
    }

    console.log(featureArr);

    let tester = ["1","2"]

    let featureList = tester.map(function(object, i){
        return <FeatureItem featureName={i}/>;
    })
    console.log("FeaureList");
    console.log(featureList);

    let FeatureList = featureArr.map((feature) => {
      console.log("looping");
      console.log(feature.name);
      return (
          <FeatureItem
            title={feature.name}
            description={feature.description}
            flag={feature.flag}
            getFeedback={feature.getFeedback}
            publicApi={feature.publicApi}
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
