import { useParams, NavLink } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useEffect, useState } from "react";

function CocktailDetails() {
  const { cocktailId } = useParams();
  const [cocktailDetail, setCocktailDetail] = useState([]);
  const { cocktails } = useGlobalContext();

  useEffect(() => {
    let filtered = cocktails.filter(data => data.idDrink === cocktailId);
    setCocktailDetail(filtered);
  }, [cocktailId]);

  return (
    <>
      {
        cocktailDetail.map(cocktail => {
          const { idDrink, strDrink, strDrinkThumb, strCategory, strAlcoholic, strGlass, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6 } = cocktail;

          const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6];

          return (
            <section key={idDrink} className="cocktail-details">
              <div className="title">
                <NavLink to="/">
                  <button type="button">BACK HOME</button>
                </NavLink>
                <h1>{strDrink}</h1>
              </div>

              <div className="details">
                <img src={strDrinkThumb} alt={strDrink} />
                <div className="info">
                  <p>
                    <span>Name :</span> {strDrink}
                  </p>
                  <p>
                    <span>Category :</span> {strCategory}
                  </p>
                  <p>
                    <span>Info :</span> {strAlcoholic}
                  </p>
                  <p>
                    <span>Glass :</span> {strGlass}
                  </p>
                  <p>
                    <span>Instructons :</span> {strInstructions}
                  </p>
                  <p>
                    <span>Ingredients :</span>
                    {
                      ingredients.map((ingredient, index) => ingredient !== "null" &&
                        <span className="ingredient" key={index}>{ingredient}</span>)
                    }
                  </p>
                </div>
              </div>
            </section>
          )
        })
      }
    </>


  )
};

export default CocktailDetails;