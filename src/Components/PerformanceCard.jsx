import { AppContext } from '../App'
import React, { useContext } from 'react'
import { ResponsiveLine } from '@nivo/line'
const moment = require('moment')

const PerformanceCard = (props) => {

    const { dispatch } = useContext(AppContext);

    const performanceData = [];

    for (var i = 0; i < props.performances.length; i++) {

        performanceData.push({
            x: moment(props.performances[i].date).format('MM/DD/YYYY'),
            y: parseInt(props.performances[i].result.replace(/[+:]/g, '.'))
        })

    }

    const data = [
        {
            id: props.athlete.athleteId + '-' + props.wod.wodId,
            color: 'hsl(197, 70%, 50%)',
            data: performanceData
        }
    ]

    //let legend;
    //switch (props.wod.type) {
    //    case 'ft':
    //        legend = 'time'
    //        break;
    //    case 'amrap':
    //        legend = 'rounds + reps'
    //        break;
    //    case 'lift':
    //        legend = 'lbs'
    //        break;
    //    default:
    //}

    return (
        <div className={'performance-card card full-border hover-border ml-2 mt-2 mr-2 ' + (!props.performances.length ? 'd-flex justify-content-center align-items-center no-data' : '')}>
            <div className={'icons ' + (props.performances.length ? 'w-100 align-self-center justify-content-end d-flex' : '')}>
                {/*<svg className="bi bi-pencil-square mr-3 cursor-pointer p-2" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z" />
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z" clipRule="evenodd" />
                </svg>*/
                    //TODO: Be able to add performance directly from grid
                }
                <svg className="bi bi-card-list cursor-pointer p-2" onClick={() => dispatch({ page: 'PerformanceDetails', athlete: props.athlete, wod: props.wod, performances: props.performances })} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M14.5 3h-13a.5.5 0 00-.5.5v9a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v-9a.5.5 0 00-.5-.5zm-13-1A1.5 1.5 0 000 3.5v9A1.5 1.5 0 001.5 14h13a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0014.5 2h-13z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M5 8a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7A.5.5 0 015 8zm0-2.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0 5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5z" clipRule="evenodd" />
                    <circle cx="3.5" cy="5.5" r=".5" />
                    <circle cx="3.5" cy="8" r=".5" />
                    <circle cx="3.5" cy="10.5" r=".5" />
                </svg>
            </div>
            {props.performances.length ?
                <ResponsiveLine
                    data={data}
                    //enableXGrid={true}
                    //enableYGrid={true}
                    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
                    pointColor="inherit"
                    xScale={{ type: 'point' }}
                    yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                    //axisBottom={{
                    //    enable: false, //TODO: set to true if desktop
                    //    orient: 'bottom',
                    //    tickSize: 5,
                    //    tickPadding: 5,
                    //    tickRotation: 0,
                    //    legendOffset: 36,
                    //    legendPosition: 'middle'
                    //}}
                    //axisLeft={{
                    //    enable: false, //TODO: set to true if desktop
                    //    orient: 'left',
                    //    tickSize: 5,
                    //    tickPadding: 5,
                    //    tickRotation: 0,
                    //    legend,
                    //    legendOffset: -40,
                    //    legendPosition: 'middle'
                    //}}
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
                <small>No performance data</small>
            }
        </div>
    );
}

export default PerformanceCard