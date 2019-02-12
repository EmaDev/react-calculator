import React, { Component } from 'react';

export default class Display extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="display">
        <div className="display-operation">{this.props.operation}</div>
        <div className="display-result">{this.props.result}</div>
      </div>
    );
  }
}