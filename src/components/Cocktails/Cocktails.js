import style from "./styles.module.css";
import Cocktail from "../Cocktail/Cocktail";
import { useGlobalContext } from "../../context";
import { Grid } from "@chakra-ui/react";

function Cocktails() {
  const { filteredData } = useGlobalContext();

  return (
    <section className={style.cocktails}>
      {
        filteredData.length > 0 &&
        <div className={style.cocktailsContent}>
          <h1>Cocktails</h1>
          <Grid templateColumns='repeat(3, 1fr)' gap={30}>
            <Cocktail cocktails={filteredData} />
          </Grid>
        </div>
      }
      {
        filteredData.length == 0 &&
        <div className={style.cocktailsContent}>
          <h1>No Cocktails Matched Your Search Criteria</h1>
        </div>
      }
    </section>
  );
};

export default Cocktails;