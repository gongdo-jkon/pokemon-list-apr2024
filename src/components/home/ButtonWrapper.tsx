import { Stack } from "@mui/material";
import { WrapperPropsType } from "../../shared/types";

export const ButtonWrapper = ({ children }: WrapperPropsType) => {
  return (
    <Stack spacing={2} direction="row" sx={{ display: "flex", justifyContent: "center" }}>
      {children}
    </Stack>
  );
};
