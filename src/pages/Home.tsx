import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Grid, Box } from "@mui/material";
import { usePokemonList } from "../hooks/usePokemonList";
import { TypeWrapper } from "../components/home/TypeWrapper";
import { ButtonWrapper } from "../components/home/ButtonWrapper";
import { GridItem } from "../components/home/GridItem";
import Loader from "../components/common/Loader";
import PokemonType from "../components/common/PokemonType";

const Home = () => {
  const [pageNum, setPageNum] = useState(1);
  const { pokemonData, loading } = usePokemonList(pageNum);

  const navigate = useNavigate();

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
        // <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
        //   <BarLoader />
        // </Box>
        <Box sx={{ my: 3 }}>
          <Grid container spacing={2}>
            {pokemonData?.map((pokemon) => {
              return (
                <Grid item xs={12} sm={4} md={3} key={pokemon.name}>
                  <GridItem
                    onClick={() => {
                      navigate(`/${pokemon.id}`);
                    }}
                  >
                    <Box
                      className="name"
                      sx={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        color: "lightslategray",
                      }}
                    >
                      No. {String(pokemon.id).padStart(4, "0")}
                    </Box>
                    <Box className="name" sx={{ fontSize: "20px", fontWeight: "bold" }}>
                      {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </Box>
                    <img src={pokemon.sprites.front_default ?? undefined} alt={pokemon.name} />

                    <TypeWrapper>
                      <PokemonType pokemon={pokemon} />
                    </TypeWrapper>
                  </GridItem>
                </Grid>
              );
            })}
          </Grid>
        </Box>
      )}

      <ButtonWrapper>
        {pageNum > 1 ? (
          <Button variant="contained" onClick={handlePrevClick} sx={{ bgcolor: "#95C9FF" }}>
            Prev
          </Button>
        ) : null}
        <Button variant="contained" onClick={handleNextClick} sx={{ bgcolor: "#5462D6" }}>
          Next
        </Button>
      </ButtonWrapper>

      <ButtonWrapper>
        <Box sx={{ fontSize: "12px", fontWeight: "bold", color: "gray", pt: 2 }}>page {pageNum}</Box>
      </ButtonWrapper>
    </Box>
  );
};

export default Home;
