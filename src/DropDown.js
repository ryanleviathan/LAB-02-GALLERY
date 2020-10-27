import React, { Component } from 'react'
import data from './data.js';

export default class DropDown extends Component {
    render() {
        return (
            <>
            <select calssName="sort-by-keyword">
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
            <select calssName="sort-by-horns">
                <option value="horns">
                    All horns
                </option>
                <option value="horns-1">
                    Single horns
                </option>
                <option value="horns-2">
                    Two horns
                </option>
                <option value="horns-3">
                    Three horns
                </option>
                <option value="horns-many">
                    Many horns
                </option>
            </select>
            </>
        )
    }
}
