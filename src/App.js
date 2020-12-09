import './App.css';
import ToDoList from './Component/ToDoList';
import DoneListContainer from './Container/DoneListContainer.jsx';
import { BrowserRouter,Link, Route,Switch } from 'react-router-dom';
import NotFound from './Component/NotFound';
import './Style/LinkStyle.css';

function App() {
  return (
    <BrowserRouter>
    <ul className= "link">
      <li>
       <Link to="/">
        go to list page
        </Link>
      </li>
      <li>
        <Link to="/done">
        go to done page
        </Link>
      </li>
    </ul>
    <Switch>
    <Route  exact path = "/" component ={ToDoList}></Route>
    <Route  exact path = "/done" component ={DoneListContainer}></Route>
    <Route  path = "*" component ={NotFound}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
