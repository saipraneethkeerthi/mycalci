/**
 * Importing REACT
 * Importing css and main.css from html folder
 * The below code is used to display the body of the page
 *
 */
import React, { Component } from "react";
import "../Html/Css/Main.css";
import { updateHistory } from "../store/actions/user";
import { connect } from "react-redux";

class Body extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Initial states
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
  /**
   * @description: the below function is used to clear the entire input field
   * @params {*} event
   * @return this.setstate
   */
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

  /**
   * @description: the below function is used to accept user inputs
   *
   * @params {value}
   * @return modifies the state component
   *
   */
  handleOperand = (value) => {
    if (this.state.isOperator) {
      if (String(this.state.finalOperand2).length <= 10) {
        let temp = Number(this.state.operand2 + value);
        if (temp || temp===0)
          this.setState({
            finalOperand2: temp,
            display1: this.state.display1 + value,
          });
        else this.setState({ error: "ERROR" });
        this.setState({ operand2: this.state.operand2 + value });
      } else {
        this.setState({ error: "LENGTH EXCEDDED" });
      }
    } else {
      if (String(this.state.finalOperand1).length <= 10) {
        let temp = Number(this.state.operand1 + value);
        
        if (temp || temp===0) {
          
          this.setState({ finalOperand1: temp, display1: temp })
        }
        else {
          
          this.setState({ error: "ERROR" })
        };
        this.setState({ operand1: this.state.operand1 + value });
      } else {
        this.setState({ error: "LENGTH EXCEDDED" });
      }
    }
  };

  /**
   * @description: the below function is used to perform arithematic operations
   * @params {value}
   */
  handleOperator = (value) => {
    if (this.state.finalOperand1) {
      if (this.state.finalOperand1 && this.state.finalOperand2) {
        let calRes = this.getFinalRes();
        console.log("...///", calRes);
        this.setState({
          operand1: String(calRes),
          finalOperand1: calRes,
          display1: String(calRes) + value,
          operand2: "",
          finalOperand2: "",
          operator: value,
        });
      } else {
        this.setState({
          isOperator: true,
          display1:
            String(this.state.finalOperand1) +
            value +
            String(this.state.finalOperand2),
          operator: value,
        });
      }
    }
  };
  /**
   * @description: the below function is used to display output
   * @params {value}
   */
  getFinalRes = () => {
    if (this.state.operand1 && this.state.operand2) {
      let arr = [...this.state.history];
      arr.push(
        String(this.state.finalOperand1) +
          this.state.operator +
          String(this.state.finalOperand2)
      );
      this.setState({ history: arr });
      this.props.updateHistory(arr);
      if (this.state.operator === "+") {
        this.setState({
          display2: this.state.finalOperand1 + this.state.finalOperand2,
        });
        return this.state.finalOperand1 + this.state.finalOperand2;
      } else if (this.state.operator === "-") {
        this.setState({
          display2: this.state.finalOperand1 - this.state.finalOperand2,
        });
        return this.state.finalOperand1 - this.state.finalOperand2;
      } else if (this.state.operator === "*") {
        this.setState({
          display2: this.state.finalOperand1 * this.state.finalOperand2,
        });
        return this.state.finalOperand1 * this.state.finalOperand2;
      } else if (this.state.operator === "/") {
        this.setState({
          display2: this.state.finalOperand1 / this.state.finalOperand2,
        });
        return this.state.finalOperand1 / this.state.finalOperand2;
      } else if (this.state.operator === "%") {
        this.setState({
          display2: this.state.finalOperand1 % this.state.finalOperand2,
        });
        return this.state.finalOperand1 % this.state.finalOperand2;
      }
    }
  };
  /**
   * @params {*}
   * @description this function will delete only last number from the operand
   * @return {this will update the states of the class}
   */
  handleDelete = () => {
    if (this.state.isOperator) {
      let str = String(this.state.finalOperand2).slice(0, -1);
      //   console.log(str)
      this.setState({
        finalOperand2: Number(str),
        display1: String(this.state.finalOperand1) + this.state.operator + str,
        operand2: str,
      });
    } else {
      let str = String(this.state.finalOperand1).slice(0, -1);
      //   console.log(str)
      this.setState({
        finalOperand1: Number(str),
        display1: str + this.state.operator + String(this.state.finalOperand2),
        operand1: str,
      });
    }
  };

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
        <h1>Calculator</h1>
        <div className="row">
          <div className="col-9">
            <div className="container w-75">
              <div style={{ margin: "10px", height: "75px" }}>
                {this.state.error ? (
                  <h1>{this.state.error}</h1>
                ) : (
                  <>
                    <h2>{this.state.display1}</h2>
                    <h2 style={{ float: "right" }}>{this.state.display2}</h2>
                  </>
                )}
              </div>

              <div className="first-row">
                <input
                  type="button"
                  name=""
                  value="Del"
                  className=" red small white-text top-margin"
                  onClick={() => this.handleDelete()}
                />
                <input
                  type="button"
                  name=""
                  value="Clear"
                  className=" red small white-text "
                  style={{ marginTop: "4px" }}
                  onClick={() => this.handleclear()}
                />
              </div>
              <div className="col-12">
                {allVal.map((btn,index) => (
                  <input key={index}
                    type="button"
                    name=""
                    value={btn.val}
                    className="global"
                    onClick={(e) =>
                      btn.id === "operand"
                        ? this.handleOperand(e.target.value)
                        : this.handleOperator(e.target.value)
                    }
                  />
                ))}
              </div>
              <div>
                <div>
                  <input
                    type="button"
                    name=""
                    value="="
                    className="green small"
                    onClick={() => this.getFinalRes()}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-3">
            HISTORY:
            {this.state.history.map((his) => (
              <h4>{his}</h4>
            ))}
          </div>
        </div>
      </>
    );
  }
}
const mapDispatchToProps = () => ({
  updateHistory,
});
const mapStateToProps = (state) => ({
  user: state.user,
});
export default connect(mapStateToProps, mapDispatchToProps())(Body);
