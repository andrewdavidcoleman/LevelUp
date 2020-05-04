import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import axios from 'axios'

const AddWodTextField = withStyles({
    root: {
        width: '75%',
        '& label.Mui-focused': {
            color: '#6EABB0',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#6EABB0',
                borderWidth: '1px'
            },
            '&:hover fieldset': {
                borderColor: '#6EABB0',
            },
        }
    },
})(TextField);

const AddWodFormControl = withStyles({
    root: {
        width: '75%',
        '& label.Mui-focused': {
            color: '#6EABB0',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#6EABB0',
                borderWidth: '1px',
            },
            '&:hover fieldset': {
                borderColor: '#6EABB0',
            },
        },
    },
})(FormControl);

const AddWodTextArea = withStyles({
    root: {
        width: '100%',
        height: '300',
        '& label.Mui-focused': {
            color: '#6EABB0',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#6EABB0',
                borderWidth: '1px'
            },
            '&:hover fieldset': {
                borderColor: '#6EABB0',
            },
        },
        '& .MuiOutlinedInput-input': {
            minHeight: '300px'
        },
    },
})(TextField);

const classes = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}))

export default function AddWod() {

    const [name, setName] = React.useState('')
    const [type, setType] = React.useState('')
    const [description, setDescription] = React.useState('')

    function handleSubmit(event) {//Get all athletes

        event.preventDefault()
        console.log(name, type, description);

        axios.post('http://localhost:8000/createWod', {
            name,
            type,
            description
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
        <div id="addWod" className="col">

            <form className="row" onSubmit={handleSubmit} action="http://localhost:8000/createWod" method="POST" noValidate autoComplete="off">
                <div className="col">
                    <div className="row justify-content-center">
                        <div className="col-5">
                            <div className="row justify-content-end">
                                <AddWodTextField
                                    className={classes.margin}
                                    label="WOD Name"
                                    variant="outlined"
                                    id="addWodNameInput"
                                    key="addWodNameInput"
                                    onChange={e => setName(e.target.value)}
                                    value={name}
                                />
                            </div>
                            <div className="row justify-content-end mt-4">
                                <AddWodFormControl variant="outlined" className={classes.formControl}>
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
                                </AddWodFormControl>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="row">
                                <AddWodTextArea
                                    className={classes.margin + ' ml-4'}
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