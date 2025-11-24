import { useState } from 'react';
import Header from './Header';
import IngredientsList from './IngredientsList';

const Main = () => {
    const [ingredient, setIngredient] = useState(["chicken", "all the main spices", "corn", "heavy cream", "pasta"]);

    const addIngredient = (formData) => {
        const newIngredient = formData.get('ingredient');
        setIngredient([...ingredient, newIngredient]);
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

            <IngredientsList ingredients={ingredient} />
        </main>
    );
}

export default Main;
