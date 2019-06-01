import React, { Component } from 'react';

export class MyItem extends Component {
    render() {
        return (
            <ul>
                {this.props.children}
            </ul>
        );
    }
}

export default MyItem;