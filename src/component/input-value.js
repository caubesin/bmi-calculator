import React, {useState, useRef} from 'react';
import {connect} from 'react-redux';
import './input-value.css';
import {actCALCULATE_BMI} from '../action/index'

 function Input(props) {
    const inputW = useRef(null);
    const inputH = useRef(null);
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const handleSubmit = () => {
        inputW.current.value = '';
        inputH.current.value = '';
        setWeight(0);
        setHeight(0);
        props.calculate_BMI(weight, height);
    }
    return(
        <div className = "input-data">
            <div className = "input-data-col">
                <label>Weight (in kg)</label><input type = 'number' ref={inputW} id = 'weight' placeholder ='50' onChange = {(e) => {e.target.value === '' ? setWeight(0) : setWeight(e.target.value)}}/>
            </div>
            <div className = "input-data-col">
                <label>Height (in cm)</label><input type = 'number' ref={inputH} id = 'height' placeholder ='170' onChange = {(e) => {e.target.value === '' ? setHeight(0) : setHeight(e.target.value)}}/>
            </div>
            <button disabled = {(weight === 0 || height === 0) ? true : false}type = 'button' onClick ={() => {handleSubmit()}}>Calculate BMI</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        calculate_BMI: (weight, height) => {
            dispatch(actCALCULATE_BMI(weight, height))
        }
    }
}

export default connect(null,mapDispatchToProps)(Input);