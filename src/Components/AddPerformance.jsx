import React from 'react'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { LevelUpTextField, LevelUpFormControl, LevelUpTextArea, LevelUpDatePicker, levelUpInputClasses, levelUpTheme } from './LevelUpInputs';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment'
import { ThemeProvider } from '@material-ui/core';
const moment = require('moment')


export default function AddPerformance(props) {

    const [result, setResult] = React.useState('')
    const [date, setDate] = React.useState(Date.now())

    function handleSubmit(event) {

        event.preventDefault()

        axios.post('http://localhost:8000/createPerformance', {
            wodId: props.wod.wodId,
            athleteId: props.athlete.athleteId,
            result,
            date
        })
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {

            })
    }

    return (
        <div id="addPerformance" className={'row'  + (!props.performances.length ? 'no-data' : '')}>

            <form className="row" onSubmit={handleSubmit} method="POST" noValidate autoComplete="off">
                <div className="col">
                    <div className="row justify-content-end">
                        {

                            props.wod.type === 'lift' ?

                                <LevelUpTextField
                                    className={levelUpInputClasses.margin}
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
                                        className={levelUpInputClasses.margin}
                                        label="Minutes"
                                        variant="outlined"
                                        id="addPerformanceMinutesInput"
                                        key="addPerformanceMinutesInput"
                                        onChange={e => setResult(e.target.value)}
                                        value={result}
                                    />
                                    <LevelUpTextField
                                        className={levelUpInputClasses.margin}
                                        label="Seconds"
                                        variant="outlined"
                                        id="addPerformanceSecondsInput"
                                        key="addPerformanceSecondsInput"
                                        onChange={e => setResult(e.target.value)}
                                        value={result}
                                    />
                                    </>

                                    : 
                                        <>
                                        <LevelUpTextField
                                            className={levelUpInputClasses.margin}
                                            label="Lbs"
                                            variant="outlined"
                                            id="addPerformanceRoundsInput"
                                            key="addPerformanceRoundsInput"
                                            onChange={e => setResult(e.target.value)}
                                            value={result}
                                        />
                                        <LevelUpTextField
                                            className={levelUpInputClasses.margin}
                                            label="Lbs"
                                            variant="outlined"
                                            id="addPerformanceRepsInput"
                                            key="addPerformanceRepsInput"
                                            onChange={e => setResult(e.target.value)}
                                            value={result}
                                        />
                                        </>
                        }
                    </div>
                    <div className="row justify-content-end mt-4">
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
                                    onChange={d => setDate(d)}
                                />
                            </ThemeProvider>
                        </MuiPickersUtilsProvider>
                    </div>
                    <div className="row justify-content-end">
                        <Button type="submit" className="ml-4 mt-4" variant="outlined">Add Performance</Button>
                    </div>
                </div>
            </form>

        </div>
    );
}