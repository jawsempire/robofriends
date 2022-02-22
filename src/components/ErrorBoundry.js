import React, { Component } from 'react';

class ErrorBoundry extends Component {

    constructor(props) {
        super();
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) {
        this.setState({hasError: true})
    }

    render() {
        if (this.state.hasError) {
            return <h1>"critical! meltdown imminent"</h1>
        }
        //render what's inside the error boundry component
        return this.props.children
    }
}

export default ErrorBoundry;