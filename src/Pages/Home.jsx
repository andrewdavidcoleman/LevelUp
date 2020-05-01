import React from 'react';
import Layout from '../Shared/Layout';
import PerformanceCard from '../Components/PerformanceCard';
const moment = require('moment');

const athletes = [
    {
        athleteId: 1,
        name: 'Erin'
    },
    {
        athleteId: 2,
        name: 'Leanne'
    },
    {
        athleteId: 3,
        name: 'Andrew'
    },
]

const wods = [
    {
        wodId: 111,
        name: 'Annie ',
        type: 'ft',
        description: `50-40-30-20-10 Reps For Time
                        Double-Unders
                        Sit-Ups`
    },
    {
        wodId: 222,
        name: 'Nancy',
        type: 'ft',
        description: `5 Rounds For Time
                        400 meter Run
                        15 Overhead Squats (95/65 lb)`
    },
    {
        wodId: 333,
        name: 'Fran',
        type:'ft',
        description: `21-15-9 Reps For Time
                        Thrusters (95/65 lb)
                        Pull-Ups`
    },
    {
        wodId: 444,
        name: 'Clean & Jerk',
        type: 'lift',
        description:''
    },
    {
        wodId: 555,
        name: 'Snatch',
        type: 'lift',
        description: ''
    },
    {
        wodId: 666,
        name: 'Front Squat',
        type: 'lift',
        description: ''
    },
    {
        wodId: 777,
        name: 'Mary',
        type: 'amrap',
        description: `AMRAP 20'
                        5 Handstand Push-Ups
                        10 Pistols (alternating legs)
                        15 Pull-Ups`
    },
]

export default function Home() {
    return (
        <Layout>
            <div id="home" className="col">
                <div className="row">
                    <div className="pr-3 index-name">
                    </div>
                    {athletes.map(athlete =>

                        <div key={athlete.athleteId} className="col">
                            <div className="row justify-content-center">
                                <h4 className="bottom-border pl-2 pr-2">{athlete.name}</h4>
                            </div>
                        </div>

                    )}
                </div>


                {wods.map(wod =>

                    <div key={wod.wodId} className="row">
                        <div className="pl-3 pr-3 index-name right-border d-flex flex-column justify-content-center">
                            <div className="row justify-content-end">
                                <h4 className="mr-3">{wod.name}</h4>
                            </div>
                        </div>
                        {athletes.map(athlete =>

                            <div key={`${athlete.athleteId}-${wod.wodId}`} className="col">
                                <div className="row justify-content-center">
                                    <PerformanceCard
                                        athlete={athlete}
                                        wod={wod}
                                    />
                                </div>
                            </div>

                        )}
                    </div>

                )}
            </div>            
        </Layout>
    );
}