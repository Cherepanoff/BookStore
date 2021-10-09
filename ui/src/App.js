import './App.css';
import Home from './Home';
import Books from './Books';
import Button from '@material-ui/core/Button';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <nav className="navbar">
        <ul className="navar-nav">
          <li className="nav-item">
            <Button className="btn btn-light" to="/Home">Home</Button>
          </li>
          <li className="nav-item">
            <Button className="btn btn-light" to="/Books">Books</Button>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path='/Home' component={Home}/>
        <Route path='/Books' component={Books}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
