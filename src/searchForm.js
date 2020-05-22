import React, {useEffect, useState, createContext} from "react";
import Results from "./results";
import {Container, Row, Form, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function SearchForm(){
  const APP_ID = "d377543c";
  const APP_KEY = "1f354455a9fe274bee4c45df3a774b24"
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');
  const RecipeContext = createContext();

  useEffect(()=>{
    getRecipes();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const getRecipes = async () =>{
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const searchQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <Container className="search-form">
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form onSubmit={searchQuery}> 
            <Form.Group controlId="formBasicEmail">
              <div class="d-flex mt-3">
                  <input class="form-control" type="text" value={search} onChange={updateSearch} placeholder="Search Recipe"></input>
                  <button class="btn btn-primary">Search</button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Row>
        <div class="d-flex flex-wrap justify-content-center">
          {recipes.map(recipe=>(
            <Results key={recipe.recipe.label} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
          ))}
        </div>
      </Row>
    </Container>
  )
}

export default SearchForm;