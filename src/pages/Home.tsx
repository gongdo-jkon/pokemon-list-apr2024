import { useState } from "react";
import { Grid, Box } from "@mui/material";
import Loader from "../components/common/Loader";
import { GridItem } from "../components/home/GridItem";
import { usePokemonList } from "../hooks/usePokemonList";
import { ButtonWrapper } from "../components/home/ButtonWrapper";

const Home = () => {
  const [pageNum, setPageNum] = useState(1);
  const { pokemonData, loading } = usePokemonList(pageNum);

  const handlePrevClick = () => {
    setPageNum((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setPageNum((prev) => prev + 1);
  };

  return (
    <Box sx={{ my: 2 }}>
      {loading ? (
        <Loader />
      ) : (
        <Box sx={{ my: 3 }}>
          <Grid container spacing={2}>
            {pokemonData?.map((pokemon) => {
              return (
                <Grid item xs={12} sm={4} md={3} key={pokemon.name}>
                  <GridItem pokemon={pokemon}></GridItem>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}

      <ButtonWrapper pageNum={pageNum} handlePrevClick={handlePrevClick} handleNextClick={handleNextClick} />

      <Box sx={{ fontSize: "12px", fontWeight: "bold", color: "gray", pt: 2 }}>page {pageNum}</Box>
    </Box>
  );
};

export default Home;
