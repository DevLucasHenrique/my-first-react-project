import { Header } from "../header/Header";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <Header />

      <section id="hero">
        <h1 className="hero-title">Italia</h1>
        <p className="slogan">O tempero da <strong>Itália</strong> na sua mesa</p>
      </section>
      <div className="transition">
        <p className="transition-p">Nossas melhores receitas</p>
      </div>
      <section id="recipes">
        <div className="recipe-card">
          <div className="head">
            <span className="low-calory"></span>
            <img
              src="https://cdn.dummyjson.com/recipe-images/1.webp"
              alt="name"
            />
          </div>
          <div className="body">
            <h2 className="name">Pizza margherita</h2>
            <p className="ingredients">
              "Pizza dough", "Tomato sauce", "Fresh mozzarella cheese", "Fresh
              basil leaves", "Olive oil", "Salt and pepper to taste"
            </p>
            <div className="level">
              Difficuldade: facil
            </div>
            <div className="footer">
              <h4 className="rating">Avaliação: 4.9</h4>
              <button className="details">Ver detalhes</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
