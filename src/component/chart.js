import React from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';

function Chart(props) {
    const data = canvas => {
        const ctx = canvas.getContext("2d")
        const gradient = ctx.createLinearGradient(63, 81, 181, 700);
        gradient.addColorStop(0, '#929dd9');
        gradient.addColorStop(1, '#172b4d');
        return {
            labels: props.calculate_BMI.arrayBMI.length === 0 ? [] : props.calculate_BMI.arrayBMI.map((data) => {
                return data.date;
            }),
            datasets : [{
                data : props.calculate_BMI.arrayBMI.length === 0 ? [] : props.calculate_BMI.arrayBMI.map((data) => {
                    return data.results;
                }),
                label : "BMI",
                backgroundColor: gradient,
                borderBackground: gradient,
                borderColor : "#3F51B5",
                pointRadius: 7,
                pointHoverRadius: 8,
                pointHoverBorderColor: 'white',
                pointHoverBorderWidth: 2,
                pointBorderColor: '#E00000',
                pointBorderWidth: 2
            }]
        };
    }
    const options = {
            responsive: true,
            scales: {
                xAxes: [
                    {
                    scaleLabel: {
                        display: true,
                        labelString: 'Date',
                        fontSize: 13,
                        fontColor: 'white'
                    },
                    gridLines: {
                        display: false,
                        color: 'white'
                    },
                    ticks: {
                        fontColor: 'white',
                        fontSize: 16
                    }
                    }
                ],
                yAxes: [
                    {
                    scaleLabel: {
                        display: true,
                        labelString: 'BMI',
                        fontSize: 13,
                        fontColor: 'white'
                    },
                    gridLines: {
                        display: false,
                        color: 'white'
                    },
                    ticks: {
                        fontColor: 'white',
                        fontSize: 16,
                        beginAtZero: true
                    }
                    }
                ]
                },
            tooltips: {
                titleFontSize: 13,
                bodyFontSize: 13
            }
    };
    
    return(
        <div style = {{width : "70%"}}>
            <Line data={data} options ={options}></Line>
        </div>
    )
}

const mapStateToProps = (state) => {
    return({
        calculate_BMI: state.calculate_BMI
    })
}

export default connect(mapStateToProps, null)(Chart);