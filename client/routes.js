import React from 'react';
import { Route,IndexRoute } from 'react-router';

import App from './components/App';
import Home from './components/page-specific/Home/Home';
import About from './components/page-specific/About/About';
import Contact from './components/page-specific/Contact/Contact';

export default (
  <Route path='/' component={App}>

    <IndexRoute component={Home} /> // If no path defined load the full design pattern list

    <Route path="/Home" component={Home} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />

  </Route>
)
