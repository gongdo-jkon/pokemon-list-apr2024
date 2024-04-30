import Box from "@mui/material/Box";
import { ContentPropsType } from "../../shared/types";

const Content = (props: ContentPropsType) => {
  return (
    <Box
      sx={{
        bgcolor: props.color,
        borderRadius: 5,
        width: props.width ?? "100px",
        p: 1.5,
        m: 1,
      }}
    >
      {props.content}
    </Box>
  );
};

export default Content;
