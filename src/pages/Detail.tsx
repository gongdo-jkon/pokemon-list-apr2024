import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import { PokemonDetailType } from "../shared/types";
import HomeIcon from "../components/icons/HomeIcon";
import SubTitle from "../components/detail/SubTitle";
import Content from "../components/detail/Content";

const Detail = () => {
  const params = useParams();
  const id = parseInt(params.id ?? "0");
  const navigate = useNavigate();
  const [data, setData] = useState<PokemonDetailType>();

  const height = data?.height && data?.height / 10;
  const weight = data?.weight && data?.weight / 10;

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
          {data?.name &&
            data?.name.charAt(0).toUpperCase() + data?.name.slice(1)}
        </Box>
        <Box>
          <Box
            component="img"
            src={data?.sprites.front_default}
            alt={data?.name}
            sx={{ width: "300px" }}
          />
        </Box>
        <SubTitle title="Height / Weight" />
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Content
            content={`${height?.toFixed(1)} m`}
            color="lightgoldenrodyellow"
          />
          <Content
            content={`${weight?.toFixed(1)} kg`}
            color="lightgoldenrodyellow"
          />
        </Box>
        <SubTitle title="Ability" />
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          {data?.abilities.map((e) => {
            return (
              <Content
                key={e.ability.name}
                content={e.ability.name}
                color="lightcyan"
              />
            );
          })}
        </Box>
        <SubTitle title="Stat" />
        <Box sx={{ mb: 2 }}>
          {data?.stats.map((e, i) => {
            return (
              <Box
                key={e.stat.name}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Content
                  content={e.stat.name}
                  color="lightgreen"
                  width="180px"
                />
                <Content
                  content={e.base_stat.toString()}
                  color="lightcoral"
                  width="50px"
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Detail;
