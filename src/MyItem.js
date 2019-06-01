import React, { Component } from 'react';

export class MyItem extends Component {
    render() {
        return (
            <li>{this.props.order}:{this.props.value}</li>
        );
    }
}

export default MyItem;