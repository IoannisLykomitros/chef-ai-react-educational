const IngredientsList = (props) => {

    const IngredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ));

    return (
        <section className="ingredients-list-section">
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">
                {IngredientsListItems}
            </ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div ref={props.ref}>
                    <h3>Ready for a Recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe}>Get Recipe</button>
            </div>}
        </section>
    );
}

export default IngredientsList;