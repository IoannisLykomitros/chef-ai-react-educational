import { useState } from 'react';
import IngredientsList from './IngredientsList';
import Recipe from './Recipe';
import { getRecipeFromOpenAI } from '../ai';

const Main = () => {
    const [ingredients, setIngredients] = useState(["tomato", "onion", "garlic", "basil"]);
    const [recipe, setRecipe] = useState("")

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
                    ingredients={ingredients} 
                    getRecipe={getRecipe}
            />}

            {/* <Recipe recipe={recipe} />   */}
            <Recipe recipe={recipe} />  
        </main>
    );
}

export default Main;
