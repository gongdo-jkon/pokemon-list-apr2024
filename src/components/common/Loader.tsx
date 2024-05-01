import { Box } from "@mui/material";
import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <BarLoader />
    </Box>
  );
};

export default Loader;
