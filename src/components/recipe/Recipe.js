import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Recipe = ({ recipe }) => {
    return (
        <div>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>{recipe.name}</Accordion.Header>
                    <Accordion.Body>
                        <p> Description: {recipe.descr} </p>
                        <h3> Ingredients: </h3>
                        <ul>
                            {recipe.ingredients.map((ingredient, index) => (
                                <li key={index}> {ingredient} </li>
                            ))}
                        </ul>
                        <h3> Directions: </h3>
                        <ul>
                            {recipe.directions.map((direction, index) => (
                                <li key={index}> {direction} </li>
                            ))}
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default Recipe;