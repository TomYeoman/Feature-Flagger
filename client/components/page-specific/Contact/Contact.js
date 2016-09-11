
import HeaderSmall from '../../common/HeaderSmall';
import HeaderLarge from '../../common/HeaderLarge';
import LightHeader from '../../common/LightHeader';
import ExampleForm from '../../common/ExampleForm';

import React from 'react'

let Contact = React.createClass({
  componentDidMount: function() {
    let menuItems = document.querySelectorAll("#main-menu li");
    for (var i = 0; i < menuItems.length; i++) {
      menuItems[i].classList.remove("active");
    }
    document.getElementById("ContactMenuItem").classList.add("active");
  },
  render () {
    return (
        <div>

          <HeaderSmall
              text = "Contact Me"
          />
          <p>
            Get in touch!!
          </p>

          <ExampleForm/>

        </div>
    )
  }
});

export default Contact;
