import React, { Component } from 'react'

export default class DropDown extends Component {
    render() {
        return (
            <>
            <select onChange={this.props.handleChange}>
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
            <select onChange={this.props.handleHornsChange}>
                <option value="">
                    All animals
                </option>
                <option value={1}>
                    One horn
                </option>
                <option value={2}>
                    Two horn
                </option>
                <option value={3}>
                    Three horn
                </option>
                <option value={100}>
                    More horn
                </option>
            </select>
            </>
        )
    }
}
