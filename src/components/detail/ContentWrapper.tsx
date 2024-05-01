import { Box } from "@mui/material";
import { WrapperPropsType } from "../../shared/types";

export const ContentWrapper = ({ children, mt, mb }: WrapperPropsType) => {
  return <Box sx={{ display: "flex", justifyContent: "center", mb: mb ?? 2, mt: mt ?? 0 }}>{children}</Box>;
};
