import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line'

export default function PerformanceCard(props) {

    const [athlete, setAthlete] = useState(props.athlete)
    const [wod, setwod] = useState(props.wod)

    //get performances of "wod", by "athlete"

    //mock db data
    const performances = [
        {
            performanceId: 111,
            wodId: wod.wodId,
            wodType: wod.type,
            athleteId: athlete.athleteId,
            result: '22:13',
            date: '12/12/2019'
        },
        {
            performanceId: 111,
            wodId: wod.wodId,
            wodType: wod.type,
            athleteId: athlete.athleteId,
            result: '20:44',
            date: '01/22/2020'
        },
        {
            performanceId: 111,
            wodId: wod.wodId,
            wodType: wod.type,
            athleteId: athlete.athleteId,
            result: '19:13',
            date: '02/02/2020'
        },
        {
            performanceId: 111,
            wodId: wod.wodId,
            wodType: wod.type,
            athleteId: athlete.athleteId,
            result: '18:56',
            date: '04/19/2020'
        },
    ]

    const performanceData = [];

    for (var i = 0; i < performances.length; i++) {
        performanceData.push({
            "x": performances[i].date,
            "y": performances[i].result.split(':')[0]
        })
    }
    const data = [
        {
            "id": athlete.athleteId + '-' + wod.wodId,
            "color": 'hsl(197, 70%, 50%)',
            "data": performanceData
        }
    ]

    let legend;

    switch (wod.type) {
        case 'ft':
            legend = 'time'
            break;
        case 'amrap':
            legend = 'rounds/reps'
            break;
        case 'lift':
            legend = 'lbs'
            break;
        default:
    }

    function handleClick() {
        console.log(athlete);
        console.log(wod);
    }

    return (
        <div className="performance-card card full-border shad shad-hover cursor-pointer m-2" onClick={handleClick}>
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