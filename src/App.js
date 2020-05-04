import React, { useState } from 'react'
import './App.scss';
import Home from './Pages/Home'
import AddWod from './Pages/AddWod'
import AddAthlete from './Pages/AddAthlete'
import TextField from '@material-ui/core/TextField';
import { makeStyles, withStyles } from '@material-ui/core/styles';

// Style overrides for material UI text field
const SearchInput = withStyles({
    root: {
        width: '100%',
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

const classes = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
}));

export default function App() {

    const [search, setSearch] = useState('')
    const [page, setPage] = useState('Home')

    let component = null;
    switch (page) {
        case 'AddWod':
            component = <AddWod />;
            break;
        case 'AddAthlete':
            component = <AddAthlete />;
            break;
        default:
            component = <Home />;
    }

  return (
      <div className="main container-fluid d-flex flex-column m-auto pb-3 fade-down-in">
          <header className="row align-items-center justify-content-center">
              <h1 className="pt-4">Level Up<i className="fas fa-level-up-alt"></i></h1>
          </header>
          <div className="action-bar row align-items-center">
              <div className="col-4">
                  <div className="row justify-content-evenly">
                      <svg onClick={() => setPage('AddAthlete')} className={'bi bi-person-plus ' + (page === 'AddAthlete' && 'active')} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M11 14s1 0 1-1-1-4-6-4-6 3-6 4 1 1 1 1h10zm-9.995-.944v-.002.002zM1.022 13h9.956a.274.274 0 00.014-.002l.008-.002c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664a1.05 1.05 0 00.022.004zm9.974.056v-.002.002zM6 7a2 2 0 100-4 2 2 0 000 4zm3-2a3 3 0 11-6 0 3 3 0 016 0zm4.5 0a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V5.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M13 7.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clipRule="evenodd" />
                      </svg>
                      <svg onClick={() => setPage('AddWod')} className={'bi bi-file-plus ' + (page === 'AddWod' && 'active')} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 1H4a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V8h-1v5a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1h5V1z" />
                          <path fillRule="evenodd" d="M13.5 1a.5.5 0 01.5.5v2a.5.5 0 01-.5.5h-2a.5.5 0 010-1H13V1.5a.5.5 0 01.5-.5z" clipRule="evenodd" />
                          <path fillRule="evenodd" d="M13 3.5a.5.5 0 01.5-.5h2a.5.5 0 010 1H14v1.5a.5.5 0 01-1 0v-2z" clipRule="evenodd" />
                      </svg>
                      <svg onClick={() => setPage('Home')} className={'bi bi-grid-3x3 ' + (page === 'Home' && 'active')} viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M0 1.5A1.5 1.5 0 011.5 0h13A1.5 1.5 0 0116 1.5v13a1.5 1.5 0 01-1.5 1.5h-13A1.5 1.5 0 010 14.5v-13zM1.5 1a.5.5 0 00-.5.5V5h4V1H1.5zM5 6H1v4h4V6zm1 4V6h4v4H6zm-1 1H1v3.5a.5.5 0 00.5.5H5v-4zm1 0h4v4H6v-4zm5 0v4h3.5a.5.5 0 00.5-.5V11h-4zm0-1h4V6h-4v4zm0-5h4V1.5a.5.5 0 00-.5-.5H11v4zm-1 0H6V1h4v4z" clipRule="evenodd" />
                      </svg>
                  </div>
              </div>
              <div className="col-4">
                  <div className="row justify-content-center">
                      {
                          page === 'Home' ?
                              <SearchInput
                                  className={classes.margin}
                                  label="Search"
                                  variant="outlined"
                                  id="searchInput"
                                  size="small"
                                  autoFocus={true}
                              /> : page === 'AddWod' ?
                                  <h4>Add WOD</h4>
                                  : <h4>Add Athlete</h4>
                      }
                  </div>
              </div>
              <div className="col-4 text-center">
                  VIEW TOGGLE
              </div>
          </div>

          { component }

      </div>
  );
}