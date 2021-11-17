import React from 'react';
import {connect} from "react-redux"

/**
 * @param {*} TopBar it will accept all the props and states
 * @returns a html tags wihich has a state( count ) in it 
 */
const Topbar = (props) => {
    
    return (
        <div className=" card shadow" style={{margin:'50px'}}>
            <h2>no of calculations:{props.history.length}</h2>
        </div>
    );
}
/**
 * 
 * @param {*} state this will get all values from the redux store
 * @returns history (this will store all value from the state history)
 */
const mapStateToProps = state => ({
    history: state.user.history
  });
  export default connect(
    mapStateToProps
  )(Topbar);
  
