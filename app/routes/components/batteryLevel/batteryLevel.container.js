import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { BatteryLevel } from './batteryLevel.component';
import { selectBatteryLevel } from '../../../modules/battery/battery.selectors';
import { BatteryActions } from '../../../modules/battery/battery.redux';

const mapStateToProps = createStructuredSelector({
  level: selectBatteryLevel,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchBattery: BatteryActions.fetchBattery,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BatteryLevel);
