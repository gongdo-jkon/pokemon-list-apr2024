import { Pokemon } from "pokenode-ts";
import { useEffect, useState } from "react";
import { NamedAPIResourceType } from "../shared/types";
import { fetchAllPokemonHandler, fetchPokemonHandler } from "../api/pokemon-api";

let pokemonNameList: NamedAPIResourceType[] | undefined = [];

export const usePokemonList = (pageNum: number) => {
  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  const [loading, setLoading] = useState(true);

  const fetchAllPokemon = async () => {
    try {
      pokemonNameList = await fetchAllPokemonHandler(pageNum);
      const pokemonResults = pokemonNameList && (await fetchPokemonHandler(pokemonNameList));
      pokemonResults && setPokemonData(pokemonResults.map((item) => item));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchAllPokemon().finally(() => {
      setLoading(false);
    });
  }, [pageNum]);

  return { pokemonData, loading };
};
