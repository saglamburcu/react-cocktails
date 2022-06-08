import style from "./styles.module.css";
import { NavLink } from "react-router-dom";

function CocktailDetails({ cocktails }) {

  return (
    <>
      {
        cocktails.length > 0 &&
        cocktails.map(cocktail => {
          const { strDrink, strAlcoholic, strGlass, strDrinkThumb, idDrink } = cocktail;
          return (
            <section key={idDrink} className={style.cocktailDetails}>
              <img src={strDrinkThumb} alt={strDrink} />
              <div className={style.info}>
                <h2>{strDrink}</h2>
                <h4>{strGlass}</h4>
                <p>{strAlcoholic}</p>
                <NavLink to={`cocktail/${idDrink}`}>
                  <button type="button">DETAILS</button>
                </NavLink>
              </div>
            </section>
          )
        })
      }
    </>

  )



};

export default CocktailDetails;