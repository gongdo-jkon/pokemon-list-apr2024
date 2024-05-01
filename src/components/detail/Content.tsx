import Box from "@mui/material/Box";

interface ContentPropsType {
  content: string | undefined;
  color?: string;
  width?: string;
  p?: string;
  m?: string;
}

const Content = (props: ContentPropsType) => {
  return (
    <Box
      sx={{
        fontWeight: "bold",
        bgcolor: props.color ?? "none",
        borderRadius: 5,
        width: props.width ?? "100px",
        alignContent: "center",
        p: props.p ?? 1.5,
        m: props.m ?? 1,
      }}
    >
      {props.content}
    </Box>
  );
};

export default Content;
