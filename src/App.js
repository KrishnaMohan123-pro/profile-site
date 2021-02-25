import './App.css';
import Home from "./Screens/Home/index"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
function PageNotFound(){
  return <p>404! Not Found</p>
}
function App() {
  return (
    <main className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="*" component={PageNotFound} />
        </Switch> 
      </Router>
    </main>
  );
}

export default App;
