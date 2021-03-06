import { BrowserRouter, Switch, Route } from 'react-router-dom';

//components
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import NavBar from './components/NavBar';
import ThemeSelector from './components/ThemeSelector';
import { useTheme } from './hooks/useTheme';

//styles
import './App.css';

function App() {
	const { mode } = useTheme();

	return (
		<div className={`App ${mode}`}>
			<BrowserRouter>
				<NavBar />
				<ThemeSelector />
				<Switch>
					<Route path='/vegan_recipes'>
						<Home />
					</Route>
					<Route path='/create'>
						<Create />
					</Route>
					<Route path='/search'>
						<Search />
					</Route>
					<Route path='/recipes/:id'>
						<Recipe />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
