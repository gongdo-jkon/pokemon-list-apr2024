import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { PokemonClient } from "pokenode-ts";
import { PokemonDetailTypes } from "./Detail";

interface NamedAPIResource {
  name: string;
  url: string;
}

const Home = () => {
  const [list, setList] = useState<NamedAPIResource[]>();
  const [data, setData] = useState<PokemonDetailTypes[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  console.log(data);

  const pokeApi = new PokemonClient();
  const fetchAllPokemon = async () => {
    setLoading(true);
    try {
      const { results } = await pokeApi.listPokemons((page - 1) * 20, 20);
      setList(results);
      list && getPokemon(list);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  const getPokemon = async (list: NamedAPIResource[]) => {
    try {
      const promises = list.map((item) => axios.get(item.url));
      const results = await Promise.all(promises);
      setData((prev) => [...prev, ...results.map((result) => result.data)]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePrevClick = () => {
    setList([]);
    setData([]);
    setPage((prev) => prev - 1);
  };
  const handleNextClick = () => {
    setList([]);
    setData([]);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    fetchAllPokemon();
  }, [page]);

  useEffect(() => {
    if (list && list.length > 0) getPokemon(list);
  }, [list]);

  return (
    <Box sx={{ my: 2 }}>
      <>{loading ? <>Loading ...</> : <></>}</>
      <Box sx={{ my: 2 }}>
        <Grid container spacing={2}>
          {data?.map((pokemon, index) => {
            return (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <Box
                  sx={{
                    p: 2,
                    border: "1px solid black",
                    display: "flex",
                    flexDirection: "column",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate(`/${pokemon.id}`);
                  }}
                >
                  <Box className="name" sx={{ fontSize: "12px" }}>
                    No. {pokemon.id}
                  </Box>
                  <Box className="name" sx={{ fontSize: "20px" }}>
                    {" "}
                    {pokemon.name}
                  </Box>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <Box
                    className="types"
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    {pokemon.types.map((type, i) => {
                      return (
                        <Box
                          key={i}
                          sx={{
                            p: 1,
                            mr: 1,
                            bgcolor: "gray",
                            borderRadius: 1.5,
                            color: "white",
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
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Stack spacing={2} direction="row">
          {page > 1 ? (
            <Button variant="contained" onClick={handlePrevClick}>
              Prev
            </Button>
          ) : null}
          <Button variant="contained" onClick={handleNextClick}>
            Next
          </Button>
        </Stack>
        <Box>{page} page</Box>
      </Box>
    </Box>
  );
};

export default Home;
