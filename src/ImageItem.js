import React, { Component } from 'react'
import data from './data.js';

export default class ImageItem extends Component {
    render() {
        return (
            <>
            <div>
                <div>{this.props.title}</div>
                <img src={this.props.url} alt='pic' />
                <div>{this.props.description}</div>
            </div>
            </>
        )
    }
}
