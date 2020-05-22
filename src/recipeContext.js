import React, {useState, createContext} from "react";

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
    const [recipes, setRecipes] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 21
        },
        {
            name: 'The Golden Compass',
            price: '$7',
            id: 22
        },
        {
            name: 'The Office',
            price: '$5',
            id: 23
        }
    ])
    return(
        <RecipeContext.Provider value={[recipes, setRecipes]}>
            {props.children}
        </RecipeContext.Provider>
    );
}