import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import DefaultLayout from '../pages/_layouts/default';

// import { store } from '~/store';

export default function RouteWrapper({ component: Component, ...rest }) {
  //  const { signed } = store.getState().auth;

  return (
    <Route
      {...rest}
      render={props => (
        <DefaultLayout>
          <Component {...props} />
        </DefaultLayout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
