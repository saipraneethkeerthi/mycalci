import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Body from "./components/Body.jsx"
import TopBar from "./components/TopBar"
import BottomBar from "./components/BottomBar"


function App() {
  
  return (
    <div >
    <TopBar/>
    <Body/>
    <BottomBar/>
      
    </div>
  );
}

export default App;
