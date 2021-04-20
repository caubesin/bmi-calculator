import {CALCULATE_BMI, REMOVE_DATA, UNDO_DATA} from '../const/index';

export const actCALCULATE_BMI = (weight, height) => {
    return {
        type : CALCULATE_BMI,
        weight,
        height
    }
}

export const actREMOVE_DATA = (id) => {
    return {
        type : REMOVE_DATA,
        id
    }
}

export const actUNDO_DATA = () => {
    return {
        type : UNDO_DATA
    }
}