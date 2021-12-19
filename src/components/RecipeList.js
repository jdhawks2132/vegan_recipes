import { Link } from "react-router-dom";
import { projectFirestore } from "../firebase/config";
import trashcan from '../assets/trashcan.svg'

import "./RecipeList.css"

const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
}

const RecipeList = ({recipes}) => {
    return ( 
        <div className="recipe-list">
            {recipes.map(recipe => (
                <div key={recipe.id} className="card">
                    <h3>{recipe.title}</h3>
                    <p>{recipe.cookingTime} to make</p>
                    <div>
                        {recipe.method.substring(0, 100)}...
                    </div>
                    <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                    <img 
                    src={trashcan}
                    alt="delete"
                    className="delete" 
                    onClick={()=> handleClick(recipe.id)}
                    />
                </div>
            ))}
        </div>
     );
}
 
export default RecipeList;