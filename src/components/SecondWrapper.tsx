import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import Hello from './Hello';

export class SecondWrapper extends Component <void, any> {
    constructor() {
        super();
    };
    render() {
        return (
            <div>
                <Hello compiler="the second hello page" framework="it IS now working!!" />
                <Link to="/">
                    <button> Click </button>
                </Link>
            </div>
        );
    };
}
