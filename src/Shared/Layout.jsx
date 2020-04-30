import React from 'react';

class Layout extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ search: event.target.value });
    }

    render() {
        return (
            <div className="main container-fluid d-flex flex-column m-auto">
                <header className="row align-items-center justify-content-center">
                    <h1 className="fade-down-in-4 pt-4">Level Up<i class="fas fa-level-up-alt"></i></h1>
                </header>
                <div className="row align-items-center">
                    <div className="col-2 col-lg-4 col-xl-4 text-center">
                        <i className="fas fa-plus grow cursor-pointer"></i>
                    </div>
                    <div className="col-8 col-lg-4 col-xl-4">
                        <div className="row justify-content-center">
                            <input className="shad shad-focus p-2 mb-4 mt-4 w-100" type="text" value={this.state.search} onChange={this.handleChange} placeholder="Search..." />
                        </div>
                    </div>
                    <div className="col-2 col-lg-4 col-xl-4 text-center">
                        VIEW TOGGLE
                </div>
                </div>
                <div className="row d-flex flex-fill">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Layout;