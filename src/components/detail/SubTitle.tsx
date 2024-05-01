import Box from "@mui/material/Box";

interface SubTitlePropsType {
  title: string;
  mx?: string;
}

const SubTitle = (props: SubTitlePropsType) => {
  return (
    <Box
      sx={{
        fontWeight: "bold",
        color: "white",
        my: 2,
        bgcolor: "gray",
        borderRadius: "20px",
        width: "auto",
        px: 5,
        mx: props.mx ?? "auto",
      }}
    >
      {props.title}
    </Box>
  );
};

export default SubTitle;
