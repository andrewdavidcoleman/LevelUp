import React from 'react';
import { ResponsiveLine } from '@nivo/line'

const data = [
    {
        "id": "japan",
        "color": "hsl(90, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 189
            },
            {
                "x": "helicopter",
                "y": 264
            },
            {
                "x": "boat",
                "y": 256
            }
        ]
    },
    {
        "id": "france",
        "color": "hsl(174, 70%, 50%)",
        "data": [
            {
                "x": "plane",
                "y": 222
            },
            {
                "x": "helicopter",
                "y": 207
            },
        ]
    },
    {
        "id": "us",
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

class PerformanceCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
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
}

export default PerformanceCard;