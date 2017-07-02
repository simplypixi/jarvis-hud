import { Record, fromJS } from 'immutable';
import { createReducer, createActions } from 'reduxsauce';

export const DEFAULT_LOCALE = 'en';

export const { Types: BatteryTypes, Creators: BatteryActions } = createActions({
  fetchBattery: [],
  fetchSuccess: ['level'],
  fetchError: ['error'],
}, { prefix: 'BATTERY_' });

const BatteryRecord = new Record({
  level: 0,
});

export const INITIAL_STATE = new BatteryRecord({});

export const successHandler = (state = INITIAL_STATE, { level }) => {
  return state.set('level', level);
  // function updateAllBatteryInfo(){
  //   updateChargeInfo();
  //   updateLevelInfo();
  //   updateChargingInfo();
  //   updateDischargingInfo();
  // }
  // updateAllBatteryInfo();

  // battery.addEventListener('chargingchange', function(){
  //   updateChargeInfo();
  // });

  // function updateChargeInfo(){
  //   console.log("Battery charging? "
  //               + (battery.charging ? "Yes" : "No"));
  // }

  // battery.addEventListener('levelchange', function(){
  //   updateLevelInfo();
  // });
  // function updateLevelInfo(){
  //   console.log("Battery level: "
  //               + battery.level * 100 + "%");
  //   state.set('level', battery.level * 100)
  // }

  // battery.addEventListener('chargingtimechange', function(){
  //   updateChargingInfo();
  // });
  // function updateChargingInfo(){
  //   console.log("Battery charging time: "
  //                + battery.chargingTime + " seconds");
  // }

  // battery.addEventListener('dischargingtimechange', function(){
  //   updateDischargingInfo();
  // });
  // function updateDischargingInfo(){
  //   console.log("Battery discharging time: "
  //                + battery.dischargingTime + " seconds");
  // }
};

export const errorHandler = (state, { error }) => console.log('ERROR', e);

export const HANDLERS = {
  [BatteryTypes.FETCH_SUCCESS]: successHandler,
  [BatteryTypes.FETCH_ERROR]: errorHandler
};

export const reducer = createReducer(INITIAL_STATE, HANDLERS);

