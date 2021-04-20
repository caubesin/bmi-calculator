import React from 'react';
import {connect} from 'react-redux';
import './notice.css';
import {actREMOVE_DATA, actUNDO_DATA} from '../action/index';


function Notice(props) {
    let data = props.calculate_BMI.arrayBMI;
    const handleData = (data) => {
        if(data < 18.5) {
            return <p>Bạn đang gầy đấy cố ăn nhiều vô nhe !</p>
        }
        else if(data >= 18.5 && data < 24.9) {
            return <p>Cơ thể bạn cân đối đấy !</p>
        }
        else if(data >= 25 && data < 29.9) {
            return <p>Bạn hơi thừa cân tí thôi !</p>
        }
        else if(data >= 30 && data < 34.9) {
            return <p>Bạn bị béo phì cấp độ I rồi nhe !</p>
        }
        else if(data >= 35 && data < 39.9) {
            return <p>Bạn bị béo phì cấp độ II rồi nên giảm cân đi !"</p>
        }
        else {
            return <p>Bạn bị béo phì cấp độ III rồi nên giảm cân gấp !</p>
        }
    }
    return(
        <div className="notice">
            <h2>7 Day Data</h2>
            <div className="notice-container">
                {data.length === 0 ? <p style={{width: "100%", fontSize: "calc(10px + 1vmin)",textAlign: 'center'}}>No logs found</p> : data.map((value, key) => {
                    return(
                        <div key={key} className = "notice-message">
                            <h3>BMI : {value.results}</h3>
                            {handleData(value.results)}
                            <h4><span>Weight : {value.weight} kg</span><span>Height : {value.height} cm</span><span>Date : {value.date}</span></h4>
                            <button onClick={()=>{props.remove_DATA(value.id)}}>x</button>
                        </div>
                    )
                })}
            </div>
            {props.calculate_BMI.isRemove ? <button className="btn-undo" onClick={() => props.undo_DATA()}>Undo</button> : ""}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return({
        calculate_BMI: state.calculate_BMI
    })
}

const mapDispatchToProps = (dispatch) => {
    return({
        remove_DATA: (id) => {
            dispatch(actREMOVE_DATA(id))
        },
        undo_DATA: () => {
            dispatch(actUNDO_DATA());
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Notice);