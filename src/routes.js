import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import PanelMixed from './containers/Panel';

export default(
  <Route  path="/" component={App} >
    <IndexRoute  components={PanelMixed}  />
  </Route>
);
