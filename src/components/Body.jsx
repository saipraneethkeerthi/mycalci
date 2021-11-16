/**
 * Importing REACT
 * The below code is used to display the body of the page
 *
 */
import React, { Component } from "react";
import "../Html/Css/Main.css";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
      operand1: "",
      operand2: "",
      finalOperand1: "",
      finalOperand2: "",
      operator: "",
      isOperator: false,
      display1: "",
      display2: "",
      error: "",
    };
  }

  handleclear = () => {
    console.log(this.state);
    this.setState({
      operand1: "",
      operand2: "",
      finalOperand1: "",
      finalOperand2: "",
      operator: "",
      isOperator: false,
      display1: "",
      display2: "",
      error: "",
    });
  };

  handleOperand = (value) => {
    if (this.state.isOperator) {
      if (String(this.state.finalOperand2).length <= 10) {
        let temp = Number(this.state.operand2 + value);
        if (temp)
          this.setState({
            finalOperand2: temp,
            display1: this.state.display1 + value,
          });
        else this.setState({ error: "ERROR" });
        this.setState({ operand2: this.state.operand2 + value });
      }else {
        this.setState({ error: "LENGTH EXCEDDED" });
      }
      
    } else {
      if (String(this.state.finalOperand1).length <= 10) {
        let temp = Number(this.state.operand1 + value);
        if (temp) this.setState({ finalOperand1: temp, display1: temp });
        else this.setState({ error: "ERROR" });
        this.setState({ operand1: this.state.operand1 + value });
      } else {
        this.setState({ error: "LENGTH EXCEDDED" });
      }
    }
  };
  handleOperator = (value) => {
    this.setState({
      isOperator: true,
      display1: String(this.state.finalOperand1)+value+String(this.state.finalOperand2),
      operator: value,
    });
  };
  getFinalRes = () => {
    let arr = [...this.state.history];
    arr.push(
      String(this.state.finalOperand1) +
        this.state.operator +
        String(this.state.finalOperand2)
    );
    this.setState({ history: arr });
    if (this.state.operator === "+") {
      this.setState({
        display2: this.state.finalOperand1 + this.state.finalOperand2,
      });
    } else if (this.state.operator === "-") {
      this.setState({
        display2: this.state.finalOperand1 - this.state.finalOperand2,
      });
    } else if (this.state.operator === "*") {
      this.setState({
        display2: this.state.finalOperand1 * this.state.finalOperand2,
      });
    } else if (this.state.operator === "/") {
      this.setState({
        display2: this.state.finalOperand1 / this.state.finalOperand2,
      });
    } else if (this.state.operator === "%") {
      this.setState({
        display2: this.state.finalOperand1 % this.state.finalOperand2,
      });
    }

  };
  handleDelete=()=>{
      if(this.state.isOperator){
        let str=String(this.state.finalOperand2).slice(0,-1)
        //   console.log(str)
          this.setState({finalOperand2:Number(str),display1:String(this.state.finalOperand1)+this.state.operator+str})
      }
      else{
          let str=String(this.state.finalOperand1).slice(0,-1)
    //   console.log(str)
      this.setState({finalOperand1:Number(str),display1:str+this.state.operator+String(this.state.finalOperand2)}) 
      }
     
  }

  render() {
    console.log(this.state);
    const allVal = [
      { id: "operand", val: "7" },
      { id: "operand", val: "8" },
      { id: "operand", val: "9" },
      { id: "operator", val: "/" },
      { id: "operand", val: "4" },
      { id: "operand", val: "5" },
      { id: "operand", val: "6" },
      { id: "operator", val: "*" },
      { id: "operand", val: "1" },
      { id: "operand", val: "2" },
      { id: "operand", val: "3" },
      { id: "operator", val: "-" },
      { id: "operand", val: "0" },
      { id: "operand", val: "." },
      { id: "operator", val: "%" },
      { id: "operator", val: "+" },
    ];
    return (
      <>
      <div className=" card shadow">
            <h2>no of calculations:{this.state.history.length}</h2>
        </div>
        <h1>Calculator Design Using HTML Layout</h1>
        <div class="container w-75">
          {this.state.error ? (
            <h1>{this.state.error}</h1>
          ) : (
            <>
              <h2>{this.state.display1}</h2>
              <h2 style={{ float: "right" }}>{this.state.display2}</h2>
            </>
          )}

          <div className="first-row">
            <input
              type="button"
              name=""
              value="Del"
              class=" red small white-text top-margin"
              onClick={()=>this.handleDelete()}
            />
            <input
              type="button"
              name=""
              value="Clear"
              class=" red small white-text "
              onClick={() => this.handleclear()}
            />
          </div>
          <div className="col-12">
            {allVal.map((btn) => (
              <input
                type="button"
                name=""
                value={btn.val}
                class="global"
                onClick={(e) =>
                  btn.id === "operand"
                    ? this.handleOperand(e.target.value)
                    : this.handleOperator(e.target.value)
                }
              />
            ))}
          </div>
          <div>
            <div class="">
              <input
                type="button"
                name=""
                value="="
                class="green small"
                onClick={() => this.getFinalRes()}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Body;
