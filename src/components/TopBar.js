import React,{useState} from 'react';
import {connect} from "react-redux"

/**
 * @param {*} TopBar it will accept all the props and states
 * @returns a html tags wihich has a state( count ) in it 
 */
const Topbar = (props) => {
    /**
     * @param {Integer} count 
     * @param {*} setCount it is used to set state of the count
     * count is the useState variable which will store the integer value in it
     */
    const [count,setCount]=useState(23)
    return (
        <div className=" card shadow" style={{margin:'50px'}}>
            <h2>no of calculations:{props.history.length}</h2>
        </div>
    );
}
const mapStateToProps = state => ({
    history: state.user.history
  });
  export default connect(
    mapStateToProps
  )(Topbar);
  
