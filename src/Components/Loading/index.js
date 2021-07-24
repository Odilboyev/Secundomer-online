import { Button } from 'reactstrap'
import React, { Component } from 'react'
import './Loading.css';

export default class Loading extends Component {

    constructor(props) {
        super(props)

        this.state = {
            step: 0,
            color: 'red'
        }

    }

    updateStep = () => this.setState({ step: this.state.step + 1 })

    componentDidMount() {
        this.timer = setInterval(this.updateStep, 100);
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('componentWillUpdate ishhladii')

        if (nextState.step >= 100)
            clearInterval(this.timer)
        else if (nextState.step >= 30 && nextState.step < 70 && this.state.color !== 'yellow')
            this.setState({ color: 'yellow' })

        else if (nextState.step >= 70 && this.state.color !== 'green')
            this.setState({ color: 'green' })

    }


    render() {
        console.log('render ishladi')
        console.log(this.state.step)
        return (
            <div className="container">
                <div className="">
                    <div className="loading-panel">
                        <div className="loading" style={{ width: `${this.state.step}%`, backgroundColor: this.state.color }}>
                            {this.state.step}

                            {/*<h1>ReactoDoro</h1>

                             <h1 className="display-1 my-4">
                                {this.state.minutes} : {this.state.seconds}
                            </h1>

                            <Button color="danger" onClick={this.startTime} className="px-3">Start</Button> */}
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
