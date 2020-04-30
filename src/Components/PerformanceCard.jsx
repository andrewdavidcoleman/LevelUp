import React, { useState } from 'react';
import { ResponsiveLine } from '@nivo/line'

const data = [
    {
        "id": "Erin",
        "color": "hsl(90, 70%, 50%)",
        "data": [
            {
                "x": "date 1",
                "y": 189
            },
            {
                "x": "date 2",
                "y": 264
            },
            {
                "x": "date 3",
                "y": 256
            }
        ]
    },
    {
        "id": "Leanne",
        "color": "hsl(174, 70%, 50%)",
        "data": [
            {
                "x": "date 1",
                "y": 222
            },
            {
                "x": "date 2",
                "y": 207
            },
        ]
    },
    {
        "id": "Andrew",
        "color": "hsl(197, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 27
            },
            {
                "x": "helicopter",
                "y": 289
            },
            {
                "x": "boat",
                "y": 183
            }
        ]
    },
]

export default function PerformanceCard(props) {

    const [athlete, setAthlete] = useState(props.athlete)
    const [metcon, setMetcon] = useState(props.metcon)

    //mock db data
    const performances = [
        {
            "x": "plane",
            "y": 27
        },
        {
            "x": "helicopter",
            "y": 289
        },
        {
            "x": "boat",
            "y": 183
        }
    ];

    const data = [
        {
            "id": athlete.athleteId,
            "color": 'hsl(197, 70%, 50%)',
            "data": performances
        }
    ]

    function handleClick() {
        console.log(athlete);
        console.log(metcon);
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
                    legend: 'count',
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