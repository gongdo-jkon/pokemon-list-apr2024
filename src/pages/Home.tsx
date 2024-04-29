import React, { useEffect, useState } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import { PokemonClient } from "pokenode-ts";

interface NamedAPIResource {
  name: string;
  url: string;
}
interface PokemonTypes {
  id: number;
  name: string;
  abilities: [];
  types: TypesType[];
  sprites: SpritesType;
}
interface SpritesType {
  front_default: string;
}
interface Type {
  name: string;
  url: string;
}
interface TypesType {
  slot: number;
  type: Type;
}

const Home = () => {
  const [list, setList] = useState<NamedAPIResource[]>();
  const [data, setData] = useState<PokemonTypes[]>([]);
  const [page, setPage] = useState(1);

  console.log(data);

  const pokeApi = new PokemonClient();
  const fetchAllPokemon = async () => {
    try {
      const { results } = await pokeApi.listPokemons((page - 1) * 20, 20);
      setList(results);
      console.log(results);
      list && getPokemon(list);
    } catch (error) {
      console.error(error);
    }
  };
  const getPokemon = async (list: NamedAPIResource[]) => {
    try {
      const promises = list.map((item) => axios.get(item.url));
      const results = await Promise.all(promises);
      setData((prev) => [...prev, ...results.map((result) => result.data)]);
    } catch (error) {}
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
    list && getPokemon(list);
  }, [list]);

  return (
    <>
      <Box>
        <div>{page}page</div>
        <Grid container spacing={2}>
          {data?.map((pokemon, index) => {
            return (
              <Grid item xs={12} sm={4} md={3} key={index}>
                <Box p={2}>
                  <div className="name">No. {pokemon.id}</div>
                  <div className="name"> {pokemon.name}</div>
                  <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                  <div className="types">
                    {pokemon.types.map((e, i) => {
                      return (
                        <Box key={i} component="span" p={1}>
                          {e.type.name}
                        </Box>
                      );
                    })}
                  </div>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={handlePrevClick}>
          Prev
        </Button>
        <Button variant="contained" onClick={handleNextClick}>
          Next
        </Button>
      </Stack>
    </>
  );
};

export default Home;
