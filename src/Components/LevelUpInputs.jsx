import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles, createMuiTheme } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {
    DatePicker
} from '@material-ui/pickers';

const levelUpTheme = createMuiTheme({
    palette: {
        primary: { 500: '#6EABB0' },
    }
});

const LevelUpTextField = withStyles({
    root: {
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

const LevelUpFormControl = withStyles({
    root: {
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

const LevelUpTextArea = withStyles({
    root: {
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

const LevelUpDatePicker = withStyles({
    root: {
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
    },
})(DatePicker);

const levelUpInputClasses = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}))

export { LevelUpTextField, LevelUpFormControl, LevelUpTextArea, LevelUpDatePicker, levelUpInputClasses, levelUpTheme }