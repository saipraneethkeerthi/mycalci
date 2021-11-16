import React,{useState} from 'react';
/**
 * @param {*} TopBar it will accept all the props and states
 * @returns a html tags wihich has a state( count ) in it 
 */
const Topbar = () => {
    /**
     * @param {Integer} count 
     * @param {*} setCount it is used to set state of the count
     * count is the useState variable which will store the integer value in it
     */
    const [count,setCount]=useState(23)
    return (
        <div className=" card shadow">
            <h2>no of calculations:{count}</h2>
        </div>
    );
}

export default Topbar;
