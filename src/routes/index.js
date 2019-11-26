import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Information from '../pages/Information';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Information} />
    </Switch>
  );
}
