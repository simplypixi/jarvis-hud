import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';
import { compose } from 'ramda';

import { App } from './app.component';

const mapStateToProps = createStructuredSelector({});

export const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(App);
