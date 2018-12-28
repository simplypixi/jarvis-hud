import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Camera } from './camera.component';

const mapStateToProps = createStructuredSelector({
  //language: selectLocalesLanguage,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  //setLanguage: LocalesActions.setLanguage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Camera);
