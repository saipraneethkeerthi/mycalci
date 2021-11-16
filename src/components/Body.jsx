/**
 * Importing REACT
 * Importing css and main.css from html folder
 * The below code is used to display the body of the page
 *
 */
import React, { Component } from "react";
import "../Html/Css/Main.css";

class Body extends Component { 
  constructor(props) {
    super(props);
    this.state = {   //Initial states
      history: [],
      operand1: "",
      operand2: "",
      finalOperand1: "",
      finalOperand2: "",
      operator: "",
      isOperator: false,
      Display1: "",
      Display2: "",
      error: "",
    };
    this.handleclear = this.handleclear.bind(this);
  }
/**
 * @description: the below function is used to clear the entire input field
 * @params {*} event 
 * @return this.setstate
 */
  handleclear = (event) => {   
    console.log(this.state);
    this.setState({
      history: [],
      operand1: "",
      operand2: "",
      finalOperand1: "",
      finalOperand2: "",
      operator: "",
      isOperator: false,
      Display1: "",
      Display2: "",
      error: "",
    });
    event.preventDefault();
  };

	/**
 * @description: the below function is used to accept user inputs
 * 
 * @params {value}
 * @return modifies the state component
 *
 */
  handleOperand = (value) => {
    if (this.state.isOperator) {
      let temp = Number(this.state.operand2 + value);
      if (temp)
        this.setState({
          finalOperand2: temp,
          display1: this.state.display1 + value,
        });
      else this.setState({ error: "ERROR" });
      this.setState({ operand2: this.state.operand2 + value });
    } else {
      let temp = Number(this.state.operand1 + value);
      if (temp) this.setState({ finalOperand1: temp, display1: temp });
      else this.setState({ error: "ERROR" });
      this.setState({ operand1: this.state.operand1 + value });
    }
  };

	/**
 * @description: the below function is used to perform arithematic operations
 * @params {value}
 */
  handleOperator = (value) => {
    this.setState({
      isOperator: true,
      display1: this.state.display1 + value,
      operator: value,
    });
  };
	/**
 * @description: the below function is used to display output
 * @params {value}
 */
  getFinalRes=()=>{
      if(this.state.operator==="+"){
          this.setState({display2: this.state.finalOperand1+this.state.finalOperand2});
      }
  }

  render() {
    console.log(this.state);
    return (
      <>
        <h1>Calculator Design Using HTML Layout</h1>
        <div class="container w-75">
          {/* <div class="header">Calculator</div> */}
          {/* <input type="text" class="result"/> */}
          <h2>{this.state.display1}</h2>
          <h2 style={{ float: "right" }}>{this.state.display2}</h2>

          <div class="first-row">
            <input
              type="button"
              name=""
              value="Del"
              class=" red small white-text top-margin"
            />
            <input
              type="button"
              name=""
              value="Clear"
              class=" red small white-text "
            />
          </div>
          <div class="second-row">
            <input
              type="button"
              name=""
              value="7"
              class="global"
              onClick={(e) => this.handleOperand(e.target.value)}
            />
            <input
              type="button"
              name=""
              value="8"
              class="global"
              onClick={(e) => this.handleOperand(e.target.value)}
            />
            <input
              type="button"
              name=""
              value="9"
              class="global"
              onClick={(e) => this.handleOperand(e.target.value)}
            />
            <input
              type="button"
              name=""
              value="/"
              class="global"
              onClick={(e) => this.handleOperator(e.target.value)}
            />
          </div>
          <div class="third-row">
            <input
              type="button"
              name=""
              value="4"
              class="global"
              onClick={(e) => this.handleOperand(e.target.value)}
            />
            <input
              type="button"
              name=""
              value="5"
              class="global"
              onClick={(e) => this.handleOperand(e.target.value)}
            />
            <input
              type="button"
              name=""
              value="6"
              class="global"
              onClick={(e) => this.handleOperand(e.target.value)}
            />
            <input
              type="button"
              name=""
              value="X"
              class="global"
              onClick={(e) => this.handleOperator(e.target.value)}
            />
          </div>
          <div class="fourth-row">
            <input
              type="button"
              name=""
              value="1"
              class="global"
              onClick={(e) => this.handleOperand(e.target.value)}
            />
            <input
              type="button"
              name=""
              value="2"
              class="global"
              onClick={(e) => this.handleOperand(e.target.value)}
            />
            <input
              type="button"
              name=""
              value="3"
              class="global"
              onClick={(e) => this.handleOperand(e.target.value)}
            />
            <input
              type="button"
              name=""
              value="-"
              class="global"
              onClick={(e) => this.handleOperator(e.target.value)}
            />
          </div>
          <div class="fourth-row">
            <input
              type="button"
              name=""
              value="0"
              class=" global"
              onClick={(e) => this.handleOperand(e.target.value)}
            />
            <input
              type="button"
              name=""
              value="."
              class=" global"
              onClick={(e) => this.handleOperand(e.target.value)}
            />
            <input
              type="button"
              name=""
              value="%"
              class="global"
              onClick={(e) => this.handleOperator(e.target.value)}
            />
            <input
              type="button"
              name=""
              value="+"
              class="global"
              onClick={(e) => this.handleOperator(e.target.value)}
            />
          </div>
          <div>
            <div class="">
              <input type="button" name="" value="=" class="green small" onClick={()=>this.getFinalRes()} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Body;
