import React, { Component } from 'react';

export default class Button extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.buttonClick = this.buttonClick.bind(this);
  }

  buttonClick(e) {
    this.props.onClick(e,this.props.text, this.props.type);
  }

  render() {
    return (
      <button className="button" onClick={this.buttonClick}>{ this.props.text }</button>
    );
  }
}