import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { PokemonClient } from "pokenode-ts";
import { TYPES_COLORS } from "../shared/data";
import { NamedAPIResourceType, PokemonDetailType } from "../shared/types";

const ITEM_AMOUNT_PER_PAGE = 20;
let pokemonUrlList: NamedAPIResourceType[] = [];

const Home = () => {
  const [pokemonData, setPokemonData] = useState<PokemonDetailType[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(true);
  console.log(pokemonData);

  const navigate = useNavigate();

  const pokeApi = new PokemonClient();
  const fetchAllPokemon = async () => {
    setLoading(true);
    try {
      const { results } = await pokeApi.listPokemons(
        (pageNum - 1) * ITEM_AMOUNT_PER_PAGE,
        ITEM_AMOUNT_PER_PAGE
      );
      pokemonUrlList = results;
      pokemonUrlList && fetchPokemon(pokemonUrlList);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const fetchPokemon = async (list: NamedAPIResourceType[]) => {
    try {
      const promises = list.map((item) => axios.get(item.url));
      const results = await Promise.all(promises);
      setPokemonData((prev) => [
        ...prev,
        ...results.map((result) => result.data),
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevClick = () => {
    setPokemonData([]);
    setPageNum((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setPokemonData([]);
    setPageNum((prev) => prev + 1);
  };

  useEffect(() => {
    fetchAllPokemon();
  }, [pageNum]);

  // useEffect(() => {
  //   if (pokemonUrlList && pokemonUrlList.length > 0)
  //     fetchPokemon(pokemonUrlList);
  // }, [pokemonUrlList]);

  return (
    <Box sx={{ my: 2 }}>
      <>{loading ? <>Loading ...</> : <></>}</>
      <Box sx={{ my: 3 }}>
        <Grid container spacing={2}>
          {pokemonData?.map((pokemon, index) => {
            return (
              <Grid item xs={12} sm={4} md={3} key={pokemon.name}>
                <Box
                  sx={{
                    p: 2,
                    borderRadius: "20px",
                    bgcolor: "white",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
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
                  <Box
                    className="name"
                    sx={{ fontSize: "20px", fontWeight: "bold" }}
                  >
                    {pokemon.name.charAt(0).toUpperCase() +
                      pokemon.name.slice(1)}
                  </Box>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <Box
                    className="types"
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    {pokemon.types.map((type, i) => {
                      const bgColor = TYPES_COLORS[type.type.name] || "gray";
                      return (
                        <Box
                          key={i}
                          sx={{
                            py: 0.5,
                            width: "100%",
                            bgcolor: bgColor,
                            borderRadius: 2,
                            color: "white",
                            textAlign: "center",
                            fontSize: "12px",
                            fontWeight: "bold",
                          }}
                        >
                          {type.type.name}
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      {/* <Box sx={{ display: "flex", justifyContent: "center" }}> */}
      <Stack
        spacing={2}
        direction="row"
        sx={{ display: "flex", justifyContent: "center" }}
      >
        {pageNum > 1 ? (
          <Button
            variant="contained"
            onClick={handlePrevClick}
            sx={{ bgcolor: "red" }}
          >
            Prev
          </Button>
        ) : null}
        <Button
          variant="contained"
          onClick={handleNextClick}
          sx={{ bgcolor: "red" }}
        >
          Next
        </Button>
      </Stack>{" "}
      {/* </Box> */}
      <Box>{pageNum} page</Box>
    </Box>
  );
};

export default Home;
