import React, { useState, useEffect } from 'react'
import Layout from '../Shared/Layout';
import PerformanceCard from '../Components/PerformanceCard';
import axios from 'axios'

export default function Home() {

    const [athletes, setAthletes] = useState([])
    const [wods, setWods] = useState([])

    //get all athletes
    useEffect(() => {
        axios.get('http://localhost:8000/getAllAthletes')
            .then(function (response) {
                setAthletes(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {

            })
    }, []);

    //get all wods
    useEffect(() => {
        axios.get('http://localhost:8000/getAllWods')
            .then(function (response) {
                setWods(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {

            })
    }, []);

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