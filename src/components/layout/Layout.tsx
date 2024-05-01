import Header from "./Header";
import Footer from "./Footer";
import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Box
      sx={{
        maxWidth: "900px",
        minWidth: "300px",
        height: "100%",
        mx: "auto",
        p: 5,
      }}
    >
      <Header />
      <Outlet />
      <Footer />
    </Box>
  );
};

export default Layout;
