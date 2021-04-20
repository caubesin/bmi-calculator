import {CALCULATE_BMI, REMOVE_DATA, UNDO_DATA} from '../const/index';
import moment from 'moment';
import {storeData, getData} from '../action/localStorage';
const initialState = {
    results : 0,
    arrayBMI : getData('data'),
    isRemove : false
}
var backupArrayBMI = [];

const calculate_BMI = (state = initialState, action) => {
    switch (action.type) {
        case CALCULATE_BMI:
            state.results = Math.round(action.weight / Math.pow(action.height/100,2) * 10) / 10;
            //------Save results to array-------//
            if(state.arrayBMI.length >= 7) {
                state.arrayBMI.shift();
            }
            state.arrayBMI.push({
                id : state.arrayBMI.length,
                date : moment().format("DD-MM-YYYY"),
                weight : action.weight,
                height : action.height,
                results : state.results
            })
            //------Add localStore-------//
            storeData('data',state.arrayBMI.sort((a,b) => a.id - b.id));
            return state = {
                ...state
            }
        case REMOVE_DATA:
            backupArrayBMI = state.arrayBMI.filter((arrayBMI) => arrayBMI.id === action.id);
            state.arrayBMI = state.arrayBMI.filter((arrayBMI) => arrayBMI.id !== action.id);
            storeData('data', state.arrayBMI.sort((a,b) => a.id - b.id));
            return state = {
                ...state,
                isRemove : true
            }
        case UNDO_DATA:
            if(state.isRemove === true) {
                state.arrayBMI.push(backupArrayBMI[0])
                storeData('data', state.arrayBMI.sort((a,b) => a.id - b.id));
                return state = {
                    ...state,
                    isRemove : false
                }
            }
            return state = {
                ...state
            }
        default:
            return state = {
                ...state
            };
    }
}

export default calculate_BMI;