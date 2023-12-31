import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const Recipe = ({ recipe }) => {
    return (
        <div>
            <Accordion flush>
                <Accordion.Item eventKey="0" variant="dark">
                    <Accordion.Header className="accordion-header">{recipe.name}</Accordion.Header>
                    <Accordion.Body className='accordion-body'>
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