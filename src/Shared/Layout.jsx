import React, { useState } from 'react';

export default function Layout(props) {

    const [search, setSearch] = useState('')

    function handleChange(event) {
        setSearch(event.target.value)
        console.log(search);
    }

    return (
        <div className="main fade-down-in container-fluid d-flex flex-column m-auto">
            <header className="row align-items-center justify-content-center">
                <h1 className="pt-4">Level Up<i className="fas fa-level-up-alt"></i></h1>
            </header>
            <div className="row align-items-center">
                <div className="col-2 col-lg-4 col-xl-4 text-center">
                    <i className="fas fa-plus grow cursor-pointer"></i>
                </div>
                <div className="col-8 col-lg-4 col-xl-4">
                    <div className="row justify-content-center">
                        <input className="shad shad-focus p-2 mb-4 mt-4 w-100" type="text" value={ search } onChange={ handleChange } placeholder="Search..." />
                    </div>
                </div>
                <div className="col-2 col-lg-4 col-xl-4 text-center">
                    VIEW TOGGLE
            </div>
            </div>
            <div className="row d-flex flex-fill">
                {props.children}
            </div>
        </div>
    );
}
