import React, { Component } from 'react';

export class MyInput extends Component {
    state = {
        value: ""
    }

    handleChange = e=> {
        this.setState({value: e.target.value});
    }

    render() {
        const { type } = this.props
        return (
            <div>
                <input value={this.state.value} onChange={this.handleChange} type={type} placeholder={this.props.ph}/>
            </div>
        );
    }
}


export default MyInput