import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'ramda';

import { HUD } from './hud.component';

import { selectBatteryLevel } from '../../../modules/battery/battery.selectors';
import { BatteryActions } from '../../../modules/battery/battery.redux';

const mapStateToProps = createStructuredSelector({
  level: selectBatteryLevel,
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  startWatchingBattery: BatteryActions.startWatchingBattery,
  cancelWatchingBattery: BatteryActions.cancelWatchingBattery,
}, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(HUD);
