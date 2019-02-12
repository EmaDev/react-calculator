import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

export default class Parent extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      label_result: "0",
      label_operation: "",
      value: 0,
      operator: "",
      last_operation: "number",
      prec_value: undefined,
      add_dot: false
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.calculatorLogic = this.calculatorLogic.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  handleButtonClick(e, text, type) {
    this.calculatorLogic(text, type);
  }

  calculate(operator, val1, val2) {
    switch (operator) {
      case "+":
        return val1 + val2;
        break;
      case "-":
        return val1 - val2;
        break;
      case "×":
        return val1 * val2;
        break;
      case "÷":
        return val1 / val2;
        break;
    }
  }

  calculatorLogic(text, type) {
    switch (type) {
      case "number":
        if (this.state.last_operation != "number") {
          if(this.state.last_operation == "operator") {
            this.state.prec_value = this.state.value;
          } else {
            this.state.prec_value = undefined;
          }
          this.state.value = 0;
        }
        if (text == ".") {
          if(this.state.label_result.indexOf(".") == -1) {
            this.state.add_dot = true;
          }
        } else {
          this.state.value = parseFloat(this.state.value.toString() + ( this.state.add_dot ? "." : "" ) + text);
          this.state.add_dot = false;
        }
        break;
      break;
      case "operator":
        if (this.state.last_operation == "number" && typeof this.state.prec_value !== "undefined") {
          this.state.value = this.calculate(this.state.operator, this.state.prec_value, this.state.value);
          this.state.label_result = this.state.value.toString();
        }
        this.state.operator = text;
        this.state.label_operation = this.state.label_result + " " + this.state.operator;
        break;
      case "result":
        let tmp = this.state.value;
        this.state.value = this.calculate(this.state.operator, this.state.prec_value, this.state.value);
        this.state.prec_value = tmp;
        this.state.label_operation = "";
        break;
    }
    this.state.label_result = this.state.value.toString().substring(0, 10);
    if(this.state.add_dot) {
      this.state.label_result += ".";
    }
    this.state.last_operation = type;
    console.log(this.state);
    this.setState(() => (this.state));
  }

  render() {
    return (
      <div className="calculator">
        <Display operation={this.state.label_operation} result={this.state.label_result} />
        <Button onClick={this.handleButtonClick} text="7" type="number" />
        <Button onClick={this.handleButtonClick} text="8" type="number" />
        <Button onClick={this.handleButtonClick} text="9" type="number" />
        <Button onClick={this.handleButtonClick} text="÷" type="operator" />
        <br />
        <Button onClick={this.handleButtonClick} text="4" type="number" />
        <Button onClick={this.handleButtonClick} text="5" type="number" />
        <Button onClick={this.handleButtonClick} text="6" type="number" />
        <Button onClick={this.handleButtonClick} text="×" type="operator" />
        <br />
        <Button onClick={this.handleButtonClick} text="1" type="number" />
        <Button onClick={this.handleButtonClick} text="2" type="number" />
        <Button onClick={this.handleButtonClick} text="3" type="number" />
        <Button onClick={this.handleButtonClick} text="-" type="operator" />
        <br />
        <Button onClick={this.handleButtonClick} text="0" type="number" />
        <Button onClick={this.handleButtonClick} text="." type="number" />
        <Button onClick={this.handleButtonClick} text="=" type="result" />
        <Button onClick={this.handleButtonClick} text="+" type="operator" />
      </div>
    );
  }
}