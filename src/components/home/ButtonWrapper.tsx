import { Button, Stack } from "@mui/material";

interface ButtonWrapperProps {
  pageNum: number;
  handlePrevClick: () => void;
  handleNextClick: () => void;
}

export const ButtonWrapper = ({ pageNum, handlePrevClick, handleNextClick }: ButtonWrapperProps) => {
  return (
    <Stack spacing={2} direction="row" sx={{ display: "flex", justifyContent: "center" }}>
      {pageNum > 1 ? (
        <Button variant="contained" onClick={handlePrevClick} sx={{ bgcolor: "#95C9FF" }}>
          Prev
        </Button>
      ) : null}
      <Button variant="contained" onClick={handleNextClick} sx={{ bgcolor: "#5462D6" }}>
        Next
      </Button>
    </Stack>
  );
};
