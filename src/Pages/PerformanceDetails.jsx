import { AppContext } from '../App'
import React, { useState, useEffect, useContext } from 'react'
import { ResponsiveLine } from '@nivo/line'
import axios from 'axios'
const moment = require('moment')


export default function PerformanceDetails(props) {
    console.log(props);
    const performanceData = [];

    for (var i = 0; i < props.performances.length; i++) {
        performanceData.push({
            x: moment(props.performances[i].date).format('MM/DD/YYYY'),
            y: parseInt(props.performances[i].result.split(':')[0])
        })
    }

    const data = [
        {
            id: props.athlete.athleteId + '-' + props.wod.wodId,
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
        <div id="performanceDetails">
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
        </div>
    );
}