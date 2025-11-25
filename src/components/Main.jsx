import { useState, useEffect, useRef } from 'react';
import IngredientsList from './IngredientsList';
import Recipe from './Recipe';
import { getRecipeFromOpenAI } from '../ai';

const Main = () => {
    const [ingredients, setIngredients] = useState([]);
    const [recipe, setRecipe] = useState("")
    const recipeRef = useRef(null);

    useEffect(() => {
        if (recipe !== "" && recipeRef.current !== null) {
            recipeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [recipe]);

    async function getRecipe() {
        const recipeMarkdown = await getRecipeFromOpenAI(ingredients)
        setRecipe(recipeMarkdown)
        console.log(recipeMarkdown)
    }

    const addIngredient = (formData) => {
        const newIngredient = formData.get('ingredient');
        setIngredients([...ingredients, newIngredient]);
    }

    return (
        <main>
            <form action={addIngredient} className='add-ingredient-form'>
                <input 
                    type="text" 
                    placeholder="e.g. oregano" 
                    aria-label='Add Ingredient'
                    name='ingredient'
                />
                <button>Add Ingredient</button>
            </form>

            {ingredients.length > 0 && 
                <IngredientsList 
                    ref={recipeRef}
                    ingredients={ingredients} 
                    getRecipe={getRecipe}
            />}

            {recipe && <Recipe recipe={recipe} />  }
        </main>
    );
}

export default Main;
