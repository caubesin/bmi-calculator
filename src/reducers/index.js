import {combineReducers} from 'redux';
import calculate_BMI from './calculate_BMI';

export default combineReducers({
    calculate_BMI : calculate_BMI
})