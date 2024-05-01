import { PokemonClient } from "pokenode-ts";
import { NamedAPIResourceType } from "../shared/types";

const pokeApi = new PokemonClient();
const ITEM_AMOUNT_PER_PAGE = 20;

export const fetchAllPokemonHandler = async (pageNum: number) => {
  try {
    const { results } = await pokeApi.listPokemons((pageNum - 1) * ITEM_AMOUNT_PER_PAGE, ITEM_AMOUNT_PER_PAGE);
    return results as NamedAPIResourceType[];
  } catch (error) {
    console.error(error);
  }
};

export const fetchPokemonHandler = async (list: NamedAPIResourceType[]) => {
  try {
    console.log(list);
    const promises = list.map((item) => pokeApi.getPokemonByName(item.name));
    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error(error);
  }
};

export const fetchSpecificPokemonHandler = async (id: string) => {
  try {
    return await pokeApi.getPokemonById(+id);
  } catch (error) {
    console.error(error);
  }
};
