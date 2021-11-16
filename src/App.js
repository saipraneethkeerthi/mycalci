import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Body from "./components/Body"
import TopBar from "./components/TopBar"
import BottomBar from "./components/BottomBar"


function App() {
  
  return (
    <div className="container" >
    <TopBar/>
    <Body/>
    <BottomBar/>
      
    </div>
  );
}

export default App;
