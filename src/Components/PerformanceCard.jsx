import React, { useState, useEffect } from 'react'
import { ResponsiveLine } from '@nivo/line'
import axios from 'axios'

export default function PerformanceCard(props) {

    const [performances, setPerformances] = useState([])

    //get performances of "wod", by "athlete"
    useEffect(() => {
        axios.get('http://localhost:8000/getAllPerformancesByAthleteIdWodId', {
            params: {
                athleteId: props.athlete.athleteId,
                wodId: props.wod.wodId
            }
        })
        .then(function (response) {
            setPerformances(response.data)
        })
        .catch(function (error) {
            console.log(error)
        })
        .finally(function () {

        })
    }, []);

    const performanceData = [];

    for (var i = 0; i < performances.length; i++) {
        performanceData.push({
            x: performances[i].date,
            y: parseInt(performances[i].result.split(':')[0])
        })
    }

    const data = [
        {
            id: props.athlete.athleteId + '-' + props.wod.wodId,
            color: 'hsl(197, 70%, 50%)',
            data: performanceData.length ? performanceData : []
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
        <div className="performance-card card full-border shad shad-hover cursor-pointer m-2">
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