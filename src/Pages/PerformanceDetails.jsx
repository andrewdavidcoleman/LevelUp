import React, { useState, useReducer } from 'react'
import { ResponsiveLine } from '@nivo/line'
import AddPerformance from '../Components/AddPerformance'
const moment = require('moment')

// Reducer to manage global app state
function reducer(state, action) {
    return {
        isAddMode: action.isAddMode
    }
}

const PerformanceDetailsContext = React.createContext(null);

const PerformanceDetails = (props) => {

    const [isAddMode, setIsAddMode] = useState(false);
    const [state, dispatch] = useReducer(reducer, { isAddMode: false })

    const prNum = Math.max(...props.performances.map(p => p.result.replace(/[+:]/g, '.')))
    let prString = prNum.toString().replace('.', props.wod.type === 'ft' ? ':' : '+')
    if (prNum < 10) {
        prString = '0' + prString
    }

    const performanceData = []
    let x;
    let y;
    for (var i = 0; i < props.performances.length; i++) {

        switch (props.wod.type) {
            case 'lift':
                x = moment(props.performances[i].date).format('MM/DD/YYYY')
                y = props.performances[i].result
                break;
            case 'amrap':
                x = moment(props.performances[i].date).format('MM/DD/YYYY')
                y = props.performances[i].result.replace('+', '.')
                break;
            case 'ft':
                x = moment(props.performances[i].date).format('MM/DD/YYYY')
                y = props.performances[i].result.replace(':', '.')
                break;
            default:
        }

        performanceData.push({
            x,
            y
        })
    }

    const data = [
        {
            id: props.athlete.athleteId + '-' + props.wod.wodId + '-detail',
            color: 'hsl(197, 70%, 50%)',
            data: performanceData
        }
    ]

    let legend;
    switch (props.wod.type) {
        case 'ft':
            legend = 'time'
            break;
        case 'amrap':
            legend = 'rounds + reps'
            break;
        case 'lift':
            legend = 'lbs'
            break;
        default:
    }

    return (
        <PerformanceDetailsContext.Provider value={{ state, dispatch }}>
            <div id="performanceDetails" className={'col '}>
                <div className="row">
                    <div className="col">

                        <div className={'graph-wrapper row full-border justify-content-center align-items-center ' + (!props.performances.length ? 'no-data' : '')}>
                            {
                                isAddMode
                                &&
                                <svg className="bi bi-x position-absolute cursor-pointer align-self-start m-2 close" onClick={() => setIsAddMode(false)} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd" />
                                    <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd" />
                                </svg>
                            }
                            {props.performances.length ? 
                            (isAddMode ?
                                    <div className="col flex-fill">
                                        <AddPerformance
                                            athlete={props.athlete}
                                            wod={props.wod}
                                        />
                                    </div>
                                :
                                    <>
                                    <div className="col position-absolute align-self-start">
                                        <div className="row icons justify-content-end">
                                                {/*
                                                 * TODO: toggle list view with ability to edit past performances
                                                 * <svg className="bi bi-list-ul m-2 cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                    <path fillRule="evenodd" d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                                </svg>
                                                */}
                                            <svg className="bi bi-plus m-2 cursor-pointer" onClick={() => setIsAddMode(true)} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clipRule="evenodd" />
                                                <path fillRule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                    </div>
                                    <ResponsiveLine
                                        data={data}
                                        margin={{ top: 10, right: 30, bottom: 30, left: 50 }}
                                        xScale={{ type: 'point' }}
                                        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                                        axisBottom={{
                                            orient: 'bottom',
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 0,
                                            legendOffset: 36,
                                            legendPosition: 'middle'
                                        }}
                                        axisLeft={{
                                            orient: 'left',
                                            tickSize: 5,
                                            tickPadding: 5,
                                            tickRotation: 0,
                                            legend,
                                            legendOffset: -40,
                                            legendPosition: 'middle'
                                        }}
                                        colors={{ scheme: 'nivo' }}
                                        pointSize={10}
                                        pointColor={{ theme: 'background' }}
                                        pointBorderWidth={2}
                                        pointBorderColor={{ from: 'serieColor' }}
                                        pointLabel="y"
                                        pointLabelYOffset={-12}
                                        useMesh={true}
                                    />
                                    </>
                            )
                            :
                            (isAddMode ? 
                                    <div className="col">
                                        <AddPerformance
                                            athlete={props.athlete}
                                            wod={props.wod}
                                        />
                                    </div>
                                :
                                <>
                                    <p>No performance data</p>
                                    <div className="icons">
                                        <svg className="bi bi-plus m-2 cursor-pointer" onClick={() => setIsAddMode(true)} width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 3.5a.5.5 0 01.5.5v4a.5.5 0 01-.5.5H4a.5.5 0 010-1h3.5V4a.5.5 0 01.5-.5z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M7.5 8a.5.5 0 01.5-.5h4a.5.5 0 010 1H8.5V12a.5.5 0 01-1 0V8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </>
                            )
                            }

                        </div>
                    </div>
                    <div className="col pl-4">
                        <div className="row">
                            <h1>{props.athlete.name}</h1>
                        </div>
                        <div className="row">
                            <h4>Last performed: {props.performances.length ? moment(new Date(Math.max(...props.performances.map(p => new Date(p.date))))).format('MM/DD/YYYY') : 'N/A'}</h4>
                        </div>
                        <div className="row">
                            <h4>Result: {props.performances.length ? props.performances[props.performances.length - 1].result : 'N/A'}</h4>
                        </div>
                        <div className="row">
                            <h4>PR: {props.performances.length ? prString : 'N/A'}</h4>
                        </div>
                        <div className="row">
                            <h1>{props.wod.name}</h1>
                        </div>
                        <div className="row">
                            <p>{props.wod.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </PerformanceDetailsContext.Provider>
    );
}

export { PerformanceDetails, PerformanceDetailsContext}