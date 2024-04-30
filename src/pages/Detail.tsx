import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import Box from "@mui/material/Box";
import { PokemonClient } from "pokenode-ts";

function HomeIcon(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export interface PokemonDetailTypes {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  height: number;
  weight: number;
  abilities: AbilitiesTypes[];
  stats: StatsTypes[];
  types: TypesTypes[];
}

interface AbilitiesTypes {
  ability: AbilityTypes;
  slot: number;
}
interface AbilityTypes {
  name: string;
  url: string;
}
interface StatsTypes {
  base_stat: number;
  effor: number;
  stat: StatTypes;
}
interface StatTypes {
  name: string;
  url: string;
}
interface TypesTypes {
  slot: number;
  type: Type;
}
interface Type {
  name: string;
  url: string;
}

const Detail = () => {
  const params = useParams();
  const id = parseInt(params.id ?? "0");
  const navigate = useNavigate();
  const [data, setData] = useState<PokemonDetailTypes>();

  const height = data?.height && data?.height / 10;
  const weight = data?.weight && data?.weight / 10;

  const pokeApi = new PokemonClient();

  const fetchPokemon = async () => {
    try {
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${params.id}`
      );
      console.log(result.data);
      setData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [id]);

  return (
    <>
      <HomeIcon
        fontSize="large"
        sx={{
          position: "absolute",
          top: 40,
          "&:hover": {
            color: "red",
            transition: "all 0.3s ease-in-out",
            cursor: "pointer",
          },
        }}
        onClick={() => {
          navigate("/");
        }}
      />

      <Box
        sx={{
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          mx: "auto",
          my: 2,
          p: 2,
          bgcolor: "white",
          borderRadius: 5,
        }}
      >
        <Box sx={{ fontWeight: "900", color: "lightgray", mt: 2 }}>
          No. {String(data?.id).padStart(4, "0")}
        </Box>
        <Box sx={{ fontSize: "36px", fontWeight: "bold", color: "gray" }}>
          {data?.name}
        </Box>
        <Box sx={{}}>
          <Box
            component="img"
            src={data?.sprites.front_default}
            alt={data?.name}
            sx={{ width: "300px" }}
          />
        </Box>
        <Box sx={{ fontSize: "24px", color: "gray", my: 2 }}>
          Height / Weight
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Box
            sx={{
              bgcolor: "lightgoldenrodyellow",
              borderRadius: 5,
              width: "100px",
              p: 1.5,
              m: 1,
            }}
          >
            {height?.toFixed(1)} m
          </Box>{" "}
          <Box
            sx={{
              bgcolor: "lightgoldenrodyellow",
              borderRadius: 5,
              width: "100px",
              p: 1.5,
              m: 1,
            }}
          >
            {weight?.toFixed(1)} kg
          </Box>
        </Box>
        <Box
          sx={{
            fontSize: "24px",
            color: "gray",
            my: 2,
          }}
        >
          Ability
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          {data?.abilities.map((e, i) => {
            return (
              <Box
                key={i}
                sx={{
                  bgcolor: "lightcyan",
                  borderRadius: 5,
                  width: "100px",
                  p: 1.5,
                  m: 1,
                }}
              >
                {e.ability.name}
              </Box>
            );
          })}
        </Box>
        <Box sx={{ fontSize: "24px", color: "gray", my: 2 }}>Stat</Box>
        <Box sx={{ mb: 2 }}>
          {data?.stats.map((e) => {
            return (
              <Box key={1} sx={{ display: "flex", justifyContent: "center" }}>
                <Box
                  sx={{
                    bgcolor: "lightgreen",
                    borderRadius: 5,
                    width: "180px",
                    p: 1.5,
                    m: 1,
                  }}
                >
                  {e.stat.name}
                </Box>
                <Box
                  sx={{
                    bgcolor: "lightcoral",
                    borderRadius: 5,
                    width: "50px",
                    alignContent: "center",
                    p: 1.5,
                    m: 1,
                  }}
                >
                  {e.base_stat}
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Detail;
