import { useLocation } from 'react-router';
import RecipeList from '../../components/RecipeList';
import { projectFirestore } from '../../firebase/config';
import { useState, useEffect } from 'react';
import './Search.css';

const Search = () => {
	const [isPending, setIsPending] = useState(false);
	const [error, setError] = useState(null);
	const [data, setData] = useState(null);

	const queryString = useLocation().search;
	const queryParams = new URLSearchParams(queryString);
	const query = queryParams.get('q');

	// const url = 'http://localhost:8000/recipes?q=' + query;
	// const { error, isPending, data } = useFetch(url);

	useEffect(() => {
		setIsPending(true);

		const unsub = projectFirestore.collection('recipes').onSnapshot(
			(snapshot) => {
				if (snapshot.empty) {
					setError('No recipes to load');
					setIsPending(false);
				} else {
					let results = [];
					snapshot.docs.forEach((doc) => {
						results.push({ ...doc.data(), id: doc.id });
					});
					setData(() => {
						let filteredRecipes = results.filter((recipe) =>
							recipe.title.toLowerCase().includes(query.toLowerCase())
						);
						return filteredRecipes;
					});
					setIsPending(false);
				}
			},
			(err) => {
				setError(err.message);
				setIsPending(false);
			}
		);

		return () => unsub();
	}, [query]);

	return (
		<div>
			<h2 className='page-title'>Recipes including "{query}"</h2>
			{error && <p className='error'>{error}</p>}
			{isPending && <p className='loading'>Loading... </p>}
			{data && <RecipeList recipes={data} />}
		</div>
	);
};

export default Search;
