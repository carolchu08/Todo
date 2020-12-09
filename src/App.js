import './App.css';
import ToDoList from './Component/ToDoList';
import DoneListContainer from './Container/DoneListContainer.jsx';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import NotFound from './Component/NotFound';
import Navigation from './Component/Navigation';



function App() {
  return (
    <BrowserRouter>
    <Navigation />
    <Switch>
    <Route  exact path = "/" component ={ToDoList}></Route>
    <Route  exact path = "/done" component ={DoneListContainer}></Route>
    <Route  path = "*" component ={NotFound}></Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
