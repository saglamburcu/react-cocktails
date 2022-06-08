import style from "./styles.module.css";
import { useGlobalContext } from "../../context";

function SearchBar() {
  const { cocktailName, handleChange } = useGlobalContext();

  return (
    <section className={style.searchbar}>
      <div className={style.searchbarContent}>
        <h4>Search Your Favorite Cocktail</h4>
        <input type="text" value={cocktailName} onChange={(e) => handleChange(e)} />
      </div>
    </section>
  )
};

export default SearchBar;