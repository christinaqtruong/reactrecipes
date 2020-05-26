import React from 'react';
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const Results = ({title, calories, image, ingredients}) => {
    return(
        <Card className="m-3" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} alt={title}/>
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                <p>Calories: {calories.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                <p>Number of Ingredients: {ingredients.length}</p>
                <ul>
                    {ingredients.map(ingredient=> <li>{ingredient.text}</li>)}
                </ul>
            </Card.Text>
            {/* <Button variant="primary">Recipe</Button> */}
            </Card.Body>
        </Card>
    );
}

export default Results;