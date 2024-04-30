import Box from "@mui/material/Box";
import { PropsType } from "../../shared/types";

const SubTitle = (props: PropsType) => {
  return (
    <Box sx={{ fontSize: "24px", color: "gray", my: 2 }}>{props.title}</Box>
  );
};

export default SubTitle;
