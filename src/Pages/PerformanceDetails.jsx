import React from 'react'
import { ResponsiveLine } from '@nivo/line'
const moment = require('moment')


export default function PerformanceDetails(props) {

    const performanceData = []

    for (var i = 0; i < props.performances.length; i++) {
        performanceData.push({
            x: moment(props.performances[i].date).format('MM/DD/YYYY'),
            y: parseInt(props.performances[i].result.split(':')[0])
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
        <div id="performanceDetails" className="col">
            <div className="row">
                <div className="col">
                    <div className={'graph-wrapper full-border ' + (!props.performances.length ? 'd-flex justify-content-center align-items-center no-data cursor-pointer' : '')}>
                        {props.performances.length ? 
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
                            :
                            <>
                                <p>No performance data</p>
                                <div className="icons">
                                    <svg className="bi bi-pencil-square mr-3 cursor-pointer" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z" />
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </>
                            }
                    </div>
                </div>
                <div className="col">
                    <div className="row">
                        <h1>{props.athlete.name}</h1>
                    </div>
                    <div className="row">
                        {props.performances.length > 0 &&
                            <h4>Last performed: {moment(new Date(Math.max(...props.performances.map(p => new Date(p.date))))).format('MM/DD/YYYY')}</h4>
                        }
                    </div>
                    <div className="row">
                        {props.performances.length > 0 && 
                            <h4>Result: {props.performances.length && props.performances[props.performances.length - 1].result}</h4>
                        }
                    </div>
                    <div className="row">
                        {props.performances.length > 0 &&
                            <h4>PR: {Math.max(...props.performances.map(p => p.result))}</h4>
                        }
                    </div>
                    <div className="row">
                        <h1>{props.wod.name}</h1>
                    </div>
                    <div className="row">
                        <br />
                        <h4>{props.wod.description}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}