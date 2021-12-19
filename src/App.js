import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import NavBar from './components/NavBar';
import ThemeSelector from './components/ThemeSelector';

//styles
import './App.css'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <ThemeSelector />
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/create'>
            <Create/>
          </Route>
          <Route path='/search'>
            <Search/>
          </Route>
          <Route path='/recipes/:id'>
            <Recipe/>
          </Route>
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App