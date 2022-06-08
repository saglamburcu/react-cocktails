import style from "./styles.module.css";
import { useGlobalContext } from "../../context";
import { useRef, useEffect } from "react";

function SearchBar() {
  const { cocktailName, handleChange } = useGlobalContext();
  const inputRef = useRef("");

  useEffect(() => {
    inputRef.current.focus();
  }, [])

  return (
    <section className={style.searchbar}>
      <div className={style.searchbarContent}>
        <h4>Search Your Favorite Cocktail</h4>
        <input type="text" ref={inputRef} value={cocktailName} onChange={(e) => handleChange(e)} />
      </div>
    </section>
  )
};

export default SearchBar;