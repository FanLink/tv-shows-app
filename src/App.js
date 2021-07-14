import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
// components
import Navbar from "./components/Navbar";
// pages
import Aboutpage from "./pages/Aboutpage";
import Homepage from "./pages/Homepage";
import Singlepage from "./pages/Singlepage";

const App = () => {
  return (
  <Router>
     {/* Navbar */}
      <Navbar />
     <div className="container">
       <Switch>
         <Route exact path="/" component ={Homepage} />
         <Route exact path="/about" component ={Aboutpage} />
         <Route  path="/singleshow/:id" component ={Singlepage} />
       </Switch>
     </div>
  </Router>
  );
}

export default App;
