import React, { useEffect, useState } from "react";
import axios from "axios";

import { PokemonClient } from "pokenode-ts";

interface NamedAPIResource {
  name: string;
  url: string;
}
interface PokemonTypes {
  id: number;
  name: string;
  abilities: [];
  types: [];
  sprites: SpritesType;
}
interface SpritesType {
  front_default: string;
}

const Home = () => {
  const [list, setList] = useState<NamedAPIResource[]>();
  const [data, setData] = useState<PokemonTypes[]>([]);
  const [page, setPage] = useState(1);
  console.log(data);

  const pokeApi = new PokemonClient();
  const fetchAllPokemon = async () => {
    try {
      const { results } = await pokeApi.listPokemons(page - 1, page * 10);
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

  useEffect(() => {
    fetchAllPokemon();
  }, []);
  useEffect(() => {
    list && getPokemon(list);
  }, [list]);

  return (
    <>
      {data?.map((e, i) => {
        return (
          <div key={i}>
            <div className="name"> {e.id}</div>
            <div className="name"> {e.name}</div>
            <img src={e.sprites.front_default} alt={e.sprites.front_default} />
            <div className="types"></div>
          </div>
        );
      })}
      <></>
    </>
  );
};

export default Home;
