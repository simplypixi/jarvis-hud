import { createSelector } from 'reselect';

const selectBatteryDomain = state => state.get('battery');

export const selectBatteryLevel = createSelector(
  selectBatteryDomain, state => state.get('level')
);
