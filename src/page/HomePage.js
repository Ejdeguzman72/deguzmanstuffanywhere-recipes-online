import React from 'react';
import NavBar from '../components/navbar/NavBar';
import AllRecipesAccordion from '../components/accordion/AllRecipesAccordion';
import recipes from '../json/recipes.json';
import AllRecipes from '../components/recipe/AllRecipes';

const HomePage = () => {
    return (
        <div>
            <AllRecipes />
        </div>
    )
}

export default HomePage;