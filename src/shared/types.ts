import { Pokemon } from "pokenode-ts";

export interface NamedAPIResourceType {
  name: string;
  url: string;
}
export interface ColorsType {
  [key: string]: string;
}

export interface SubTitlePropsType {
  title: string;
  mx?: string;
}

export interface ContentPropsType {
  content: string | undefined;
  color?: string;
  width?: string;
  p?: string;
  m?: string;
}

export interface WrapperPropsType {
  children: React.ReactNode;
  width?: string;
  mt?: string;
  mb?: string;
  onClick?: () => void;
}
