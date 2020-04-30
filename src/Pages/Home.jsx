import React from 'react';
import Layout from '../Shared/Layout';
import PerformanceCard from '../Components/PerformanceCard';

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

const lifts = [
    {
        liftId: 111,
        name: 'Clean & Jerk'
    },
    {
        liftId: 222,
        name: 'Snatch'
    },
    {
        liftId: 333,
        name: 'Front Squat'
    },
]

const metcons = [
    {
        metconId: 111,
        name: 'Annie ',
        description: `50-40-30-20-10 Reps For Time
                        Double-Unders
                        Sit-Ups`
    }, {
        metconId: 222,
        name: 'Nancy',
        description: `5 Rounds For Time
                        400 meter Run
                        15 Overhead Squats (95/65 lb)`
    }, {
        metconId: 333,
        name: 'Fran',
        description: `21-15-9 Reps For Time
                        Thrusters (95/65 lb)
                        Pull-Ups`
    },
]

export default function Home() {
    return (
        <Layout>
            <div id="home" className="col">
                <div className="row">
                    <div className="pr-3 mr-3 index-name">
                    </div>
                    {athletes.map(athlete =>

                        <div className="col">
                            <div className="row justify-content-center">
                                <h4 className="bottom-border">{athlete.name}</h4>
                            </div>
                        </div>

                    )}
                </div>


                {metcons.map(metcon =>

                    <div className="row">
                        <div className="pl-3 pr-3 mr-3 index-name right-border d-flex flex-column justify-content-center">
                            <div className="row justify-content-end">
                                <h4 className="mr-3">{metcon.name}</h4>
                            </div>
                        </div>
                        {athletes.map(athlete =>

                            <div className="col">
                                <div className="row justify-content-center">
                                    <PerformanceCard
                                        athlete={athlete}
                                        metcon={metcon}
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