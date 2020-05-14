import React, { useContext } from 'react'
import { AppContext } from '../App'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button'
import axios from 'axios'
import { LevelUpTextField, LevelUpFormControl, LevelUpTextArea, levelUpInputClasses } from '../Components/LevelUpInputs'

export default function AddWod() {

    const [name, setName] = React.useState('')
    const [type, setType] = React.useState('')
    const [description, setDescription] = React.useState('')
    const { state, dispatch } = useContext(AppContext);

    function handleSubmit(event) {//Get all athletes

        event.preventDefault()

        axios.post('http://localhost:8000/createWod', {
            name,
            type,
            description
        })
            .then(function (response) {
                dispatch({ ...state, page: 'Home' })
            })
            .catch(function (error) {
                console.log(error)
            })
            .finally(function () {

            })
    }

    return (
        <div id="addWod" className="col">

            <form className="row" onSubmit={handleSubmit} method="POST" noValidate autoComplete="off">
                <div className="col">
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <div className="row justify-content-end">
                                <LevelUpTextField
                                    className={levelUpInputClasses.margin + ' w-100'}
                                    label="WOD Name"
                                    variant="outlined"
                                    id="addWodNameInput"
                                    key="addWodNameInput"
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className="row justify-content-end mt-4">
                                <LevelUpFormControl variant="outlined" className={levelUpInputClasses.formControl + ' w-100'}>
                                    <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-outlined-label"
                                        id="addWodTypeInput"
                                        key="addWodTypeInput"
                                        label="Type"
                                        name="type"
                                        onChange={e => setType(e.target.value)}
                                        value={type}
                                    >
                                        <MenuItem value={'lift'}>Lift</MenuItem>
                                        <MenuItem value={'amrap'}>AMRAP</MenuItem>
                                        <MenuItem value={'ft'}>For Time</MenuItem>
                                    </Select>
                                </LevelUpFormControl>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <LevelUpTextArea
                                    className={levelUpInputClasses.margin + ' ml-4 w-100'}
                                    label="Descripton"
                                    variant="outlined"
                                    id="addWodDescriptionInput"
                                    key="addWodDescriptionInput"
                                    multiline={true}
                                    name="description"
                                    onChange={e => setDescription(e.target.value)}
                                    value={description}
                                />
                            </div>
                            <div className="row justify-content-end">
                                <Button type="submit" className="ml-4 mt-4" variant="outlined">Add WOD</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
}