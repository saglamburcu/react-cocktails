import style from "./styles.module.css";
import Cocktail from "../Cocktail/Cocktail";
import { useGlobalContext } from "../../context";
import { Grid } from "@chakra-ui/react";

function Cocktails() {
  const { cocktails, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className={style.cocktailsContent}>
        <h1>Loading...</h1>
      </div>
    )
  };

  if (cocktails.length < 1) {
    return (
      <div className={style.cocktailsContent}>
        <h1>No Cocktails Matched Your Search Criteria</h1>
      </div>
    )
  }

  return (
    <section className={style.cocktails}>
      <div className={style.cocktailsContent}>
        <h1>Cocktails</h1>
        <Grid templateColumns='repeat(3, 1fr)' gap={30}>
          <Cocktail cocktails={cocktails} />
        </Grid>
      </div>
    </section>
  );
};

export default Cocktails;