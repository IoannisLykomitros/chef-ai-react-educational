import { useState } from 'react';
import Header from './Header';

const Main = () => {
    return (
        <main>
            <form className='add-ingredient-form'>
                <input 
                    type="text" 
                    placeholder="e.g. oregano" 
                    aria-label='Add Ingredient'
                    name='ingredient'
                />
                <button>Add Ingredient</button>
            </form>
        </main>
    );
}

export default Main;
