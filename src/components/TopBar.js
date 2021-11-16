import React,{useState} from 'react';

const Topbar = () => {
    const [count,setCount]=useState(23)

    return (
        <div>
            <h1>no of calculations:{count}</h1>
        </div>
    );
}

export default Topbar;
