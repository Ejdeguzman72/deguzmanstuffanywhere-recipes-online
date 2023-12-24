import React from 'react';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => {
    return (
        <div>
            {recipes.map((recipe,index) => (
                <Recipe key={index} recipe={recipe} />
            ))}
            <br></br>
        </div>
    )
}

export default RecipeList;