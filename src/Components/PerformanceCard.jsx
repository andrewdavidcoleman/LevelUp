import React from 'react';

class PerformanceCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ search: event.target.value });
    }

    render() {
        return (
            <div className="performance-card card full-border shad shad-hover cursor-pointer m-2">
                <p>{this.props.athlete.name}</p>
                <p>{this.props.metcon.name}</p>
            </div>
        );
    }
}

export default PerformanceCard;