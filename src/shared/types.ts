export interface NamedAPIResourceType {
  name: string;
  url: string;
}
export interface ColorsType {
  [key: string]: string;
}

export interface PokemonDetailType {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  abilities: AbilitiesType[];
  stats: StatsType[];
  types: TypesType[];
}

interface AbilitiesType {
  ability: AbilityType;
  slot: number;
}
interface AbilityType {
  name: string;
  url: string;
}
interface StatsType {
  base_stat: number;
  effort: number;
  stat: StatType;
}
interface StatType {
  name: string;
  url: string;
}
interface TypesType {
  slot: number;
  type: Type;
}
interface Type {
  name: string;
  url: string;
}

export interface PropsType {
  title: string;
}

export interface ContentPropsType {
  content: string | undefined;
  color: string;
  width?: string;
}
