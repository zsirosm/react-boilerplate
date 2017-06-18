import * as React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';

import Hello from './Hello';


class HelloWrapper extends Component <any, any> {
    constructor() {
        super();
    };
    render() {
        return (
            <div>
                <Hello compiler="TypeScript" framework="React" />
                <Link to="/second">
                    <button> Click </button>
                </Link>
            </div>
        );
    };
}

export default HelloWrapper;