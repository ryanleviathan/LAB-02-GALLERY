import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <>
            <div className='animal-text'>
                <div>{this.props.title}</div>
                <img src={this.props.url} alt='pic' />
                <div>{this.props.description}</div>
            </div>
            </>
        )
    }
}
