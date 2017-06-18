import * as React from 'react';
import { Component } from 'react';

export interface HelloProps {
  compiler: string,
  framework: string,
}

class Hello extends Component <HelloProps, any> {
  constructor(props: HelloProps) {
    super(props);
    this.state={
      compiler: props.compiler,
      framework: props.framework,
    };
  };
  render() {
    return (
      <div>
      <h1> Hello from {this.state.compiler} and also {this.state.framework} </h1>
      </div>
    );
  }    
}

export default Hello;