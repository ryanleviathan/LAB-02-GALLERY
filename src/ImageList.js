import React, { Component } from 'react'
import ImageItem from './ImageItem.js';

export default class ImageList extends Component {
    render() {
        const filteredAnimals = this.props.animals.filter((animal) => {
            if (!this.props.filter) return true;
            if (!this.props.horns) return true;

            if (animal.keyword === this.props.filter) return true;
            if (animal.horns === this.props.horns) return true;

            return false
        });

        return (
            <>
            <section>
                {filteredAnimals.map(item => {
                    return <ImageItem
                    title = {item.title}
                    url = {item.url}
                    description = {item.description}
                    />
                })}
            </section>
            </>
        )
    }
}