/**
 * Importing REACT
 * The below code is used to display the body of the page
 *
 */
import React, { Component } from "react";
import "../Html/Css/Main.css";

class Body extends Component {
	constructor(props) {
        super(props)
            this.state = {
                history: [],
				  			operand1: "",
								operator: "",
								operand2: "",
								Display1: "",
								Display2: "",
            }
            this.handleSubmit = this.handleSubmit.bind(this)
        }

		handleSubmit = (event) => {
			console.log(this.state)
			this.setState({
				history: [],
				operand1: "",
				operator: "",
				operand2: "",
				Display1: "",
				Display2: "",
            })
            event.preventDefault()

        }
  
    
  render() {
    return (
      <>
        <h1>Calculator Design Using HTML Layout</h1>
        <div class="container w-75">
          {/* <div class="header">Calculator</div> */}
          {/* <input type="text" class="result"/> */}
          <h2>fyfyfygygv</h2>
          <h2 style={{ float: "right" }}>yghhjk</h2>

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
            <input type="button" name="" value="7" class="global" onClick={(e)=>console.log(e)} />  
            <input type="button" name="" value="8" class="global" />
            <input type="button" name="" value="9" class="global" />
            <input type="button" name="" value="/" class="global" />
          </div>
          <div class="third-row">
            <input type="button" name="" value="4" class="global" />
            <input type="button" name="" value="5" class="global" />
            <input type="button" name="" value="6" class="global" />
            <input type="button" name="" value="X" class="global" />
          </div>
          <div class="fourth-row">
            <input type="button" name="" value="1" class="global" />
            <input type="button" name="" value="2" class="global" />
            <input type="button" name="" value="3" class="global" />
            <input type="button" name="" value="-" class="global" />
          </div>
          <div class="fourth-row">
            <input type="button" name="" value="0" class=" global" />
            <input type="button" name="" value="." class=" global" />
            <input type="button" name="" value="%" class="global" />
            <input type="button" name="" value="+" class="global" />
          </div>
          <div>
            <div class="">
              <input type="button" name="" value="=" class="green small" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Body;
