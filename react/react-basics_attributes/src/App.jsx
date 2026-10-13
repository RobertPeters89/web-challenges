import "./styles.css";

export default function App() {
  return <ArticleComponent />;
}

function ArticleComponent() {
  return (
    <article className="article">
      <h2 className="article__title">HTML Attributes in React</h2>
      <label htmlFor="name">Name:</label>
      <input id="name"></input>
      <a className="article__link" href="https://de.wikipedia.org/wiki/React">
        Wikipedia Link for react
      </a>
    </article>
  );
}
