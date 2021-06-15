import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import HomePage from '../HomePage';
import FrontEndPage from '../FrontEndPage';
import BackEndPage from '../BackEndPage';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/navitrine" component={FrontEndPage} />
      <Route path="/pally" component={BackEndPage} />
    </Switch>
  </BrowserRouter>
)

export default Routes;