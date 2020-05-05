import React, { useState, useEffect, useReducer } from 'react'
import PerformanceCard from '../Components/PerformanceCard';
import axios from 'axios'

const Home = (props) => {

    const [athletes, setAthletes] = useState([])
    const [wods, setWods] = useState([])
    const [performances, setPerformances] = useState([])

    useEffect(() => {

        //Get all athletes
        axios.get('http://localhost:8000/getAllAthletes')
            .then(function (response) {
                setAthletes(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {

            })

        // Get all wods
        axios.get('http://localhost:8000/getAllWods')
            .then(function (response) {
                setWods(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {

            })

        // Get all performances
        axios.get('http://localhost:8000/getAllPerformances')
            .then(function (response) {
                setPerformances(response.data)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {

            })

    }, []);

    useEffect(() => {
        console.log(props.search);
        console.log(wods);
        setWods(wods.filter(w => w.name.toLowerCase().includes(props.search.toLowerCase())))
        console.log(wods.filter(w => w.name.toLowerCase().includes(props.search.toLowerCase())));
    }, [props.search]);

    return (
            <div id="home" className="col">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="row pl-1 pr-1">
                            {athletes.map(athlete =>

                                <div key={athlete.athleteId} className="col text-center">
                                    <h4 className="bottom-border m-0 pb-2">{athlete.name}</h4>
                                </div>

                            )}
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>

                {wods.map(wod =>

                    <div key={wod.wodId} className="row">
                        <div className="col-2 right-border d-flex flex-column justify-content-center">
                            <div className="row justify-content-end">
                                <h4 className="mr-3">{wod.name}</h4>
                            </div>
                        </div>

                        <div className="col-8">
                            <div className="row pl-2 pt-2 pr-2">
                                {athletes.map(athlete =>
                                    <div key={`${athlete.athleteId}-${wod.wodId}`} className="col">
                                        <div className="row justify-content-center">
                                            <PerformanceCard
                                                athlete={athlete}
                                                wod={wod}
                                                performances={performances.filter(p => p.wodId === wod.wodId && p.athleteId === athlete.athleteId)}
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="col-2 left-border d-flex flex-column justify-content-center">
                            OPTIONS
                    </div>
                    </div>

                )}
            </div>  
    );
}

export { Home }