import React, { Component } from 'react'
import ImageItem from './ImageItem.js';
import animals from './data.js';

export default class ImageList extends Component {
    state = {
        filter: ""
    }
    
    handleChange = e => {
        console.log(e.target.value);
        this.setState({
            filter: e.target.value
        });
    }

    render() {
        const filteredAnimals = animals.filter((animal) => {
            if (!this.state.filter) return true;

            if (animal.keyword === this.state.filter) return true;

            return false
        });

        return (
            <>
            <select onChange={this.handleChange}>
                <option value="">
                    All animals
                </option>
                <option value="narwhal">
                    Narwal
                </option>
                <option value="rhino">
                    Rhino
                </option>
                <option value="unicorn">
                    Unicorn
                </option>
                <option value="unilego">
                    Unilego
                </option>
                <option value="triceratops">
                    Triceratops
                </option>
                <option value="markhor">
                    Markhor
                </option>
                <option value="mouflon">
                    Mouflon
                </option>
                <option value="addax">
                    Addax
                </option>
                <option value="chameleon">
                    Chameleon
                </option>
                <option value="lizard">
                    Lizard
                </option>
                <option value="dragon">
                    Dragon
                </option>
            </select>
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