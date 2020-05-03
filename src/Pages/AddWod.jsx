import React, { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios'

export default function AddWod() {

    const [name, setName] = React.useState('');
    const [type, setType] = React.useState('');
    const [description, setDescription] = React.useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleTypeChange(event) {
        setType(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

    function handleSubmit(event) {

    }

    const AddWodTextField = withStyles({
        root: {
            '& label.Mui-focused': {
                color: '#6EABB0',
            },
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                    borderColor: '#6EABB0',
                },
            },
        },
    })(TextField);

    const AddWodFormControl = withStyles({
        root: {
            width: '50%'
        },
    })(FormControl);

    const AddWodTextArea = withStyles({
        root: {
            width: '75%',
            height: '300',
            '& label.Mui-focused': {
                color: '#6EABB0',
            },
            '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
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
    }));

    return (
        <div id="addWod" className="col">

            <form className="row" noValidate autoComplete="off">
                <div className="col-4">
                    <div className="row justify-content-end">
                        <AddWodTextField
                            className={ classes.margin }
                            label="Name"
                            variant="outlined"
                            id="addWodNameInput"
                        />
                    </div>
                    <div className="row justify-content-end mt-4">
                        <AddWodFormControl variant="outlined" className={classes.formControl}>
                            <InputLabel id="demo-simple-select-outlined-label">Type</InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="addWodTypeInput"
                                label="Type"
                            >
                                <MenuItem value={ 'lift' }>Lift</MenuItem>
                                <MenuItem value={ 'amrap' }>AMRAP</MenuItem>
                                <MenuItem value={ 'ft' }>For Time</MenuItem>
                            </Select>
                        </AddWodFormControl>
                    </div>
                </div>
                <div className="col-8">
                    <AddWodTextArea
                        className={classes.margin}
                        label="Descripton"
                        variant="outlined"
                        id="addWodDescriptionInput"
                        multiline={true}
                    />
                </div>
            </form>

        </div>
    );
}