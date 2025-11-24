import ReactMarkdown from 'react-markdown';

export default function Recipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live='polite'>
            <h1>Chef AI Recommends:</h1>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}