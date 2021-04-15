import React, { useState, useContext } from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { LevelUpTextField, LevelUpDatePicker, levelUpInputClasses, levelUpTheme } from './LevelUpInputs'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import MomentUtils from '@date-io/moment'
import { ThemeProvider } from '@material-ui/core'
import { PerformanceDetailsContext } from '../Pages/PerformanceDetails'
const moment = require('moment')


export default function AddPerformance(props) {
    const [minutes, setMinutes] = useState('')
    const [seconds, setSeconds] = useState('')
    const [rounds, setRounds] = useState('')
    const [reps, setReps] = useState('')
    const [result, setResult] = useState('')
    const [date, setDate] = useState(moment(Date.now()).format('YYYY-MM-DD'))
    const { state, dispatch } = useContext(PerformanceDetailsContext);

    function handleSubmit(event) {

        event.preventDefault()

        axios.post(`${process.env.REACT_APP_DB}createPerformance`, {
            wodId: props.wod.wodId,
            athleteId: props.athlete.athleteId,
            result,
            date
        })
            .then(function (response) {
                dispatch({...state, newPerformance: response.data.performance, isAddMode: false})
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {

            })
    }

    function handleMinutesChange(event) {
        setMinutes(event.target.value)
        setResult(event.target.value + ':' + seconds)
    }

    function handleSecondsChange(event) {
        setSeconds(event.target.value)
        setResult(minutes + ':' + event.target.value)
    }

    function handleRoundsChange(event) {
        setRounds(event.target.value)
        setResult(event.target.value + ':' + reps)
    }

    function handleRepsChange(event) {
        setReps(event.target.value)
        setResult(rounds + ':' + event.target.value)
    }

    return (
        <div id="addPerformance" className="row">

            <div className="col">
                <form className="row" onSubmit={handleSubmit} method="POST" noValidate autoComplete="off">
                    <div className="col">
                        <div className="row justify-content-center align-items-center">
                            {

                                props.wod.type === 'lift' ?

                                    <LevelUpTextField
                                        className={levelUpInputClasses.margin + ' lbs'}
                                        label="Lbs"
                                        variant="outlined"
                                        id="addPerformanceLbsInput"
                                        key="addPerformanceLbsInput"
                                        onChange={e => setResult(e.target.value)}
                                        value={result}
                                    />

                                    : props.wod.type === 'ft' ?

                                        <>
                                            <LevelUpTextField
                                                className={levelUpInputClasses.margin + ' minutes'}
                                                label="Minutes"
                                                variant="outlined"
                                                id="addPerformanceMinutesInput"
                                                key="addPerformanceMinutesInput"
                                                onChange={handleMinutesChange}
                                                value={minutes}
                                            />
                                            <span className="font-weight-bold m-2">:</span>
                                            <LevelUpTextField
                                                className={levelUpInputClasses.margin + ' seconds'}
                                                label="Seconds"
                                                variant="outlined"
                                                id="addPerformanceSecondsInput"
                                                key="addPerformanceSecondsInput"
                                                onChange={handleSecondsChange}
                                                value={seconds}
                                            />
                                        </>

                                        :
                                        <>
                                            <LevelUpTextField
                                                className={levelUpInputClasses.margin + ' rounds'}
                                                label="Rounds"
                                                variant="outlined"
                                                id="addPerformanceRoundsInput"
                                                key="addPerformanceRoundsInput"
                                                onChange={handleRoundsChange}
                                                value={rounds}
                                            />
                                            <span className="font-weight-bold m-2">+</span>
                                            <LevelUpTextField
                                                className={levelUpInputClasses.margin + ' reps'}
                                                label="Reps"
                                                variant="outlined"
                                                id="addPerformanceRepsInput"
                                                key="addPerformanceRepsInput"
                                                onChange={handleRepsChange}
                                                value={reps}
                                            />
                                        </>
                            }
                        </div>
                        <div className="row justify-content-center mt-4">
                            <MuiPickersUtilsProvider utils={MomentUtils}>
                                <ThemeProvider theme={levelUpTheme}>
                                    <LevelUpDatePicker
                                        disableFuture
                                        disableToolbar
                                        autoOk
                                        variant="inline" //TODO: if not mobile
                                        inputVariant="outlined"
                                        label="Date Performed"
                                        format="MM/DD/YYYY"
                                        value={date}
                                        onChange={d => setDate(moment(d).format('YYYY-MM-DD'))}
                                    />
                                </ThemeProvider>
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className="row justify-content-center">
                            <Button type="submit" className="mt-4" variant="outlined">Add Performance</Button>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );
}