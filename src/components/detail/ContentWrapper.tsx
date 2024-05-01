import { Box } from "@mui/material";

interface ContentWrapperProps {
  children: React.ReactNode;
  mt?: string;
  mb?: string;
}

export const ContentWrapper = ({ children, mt, mb }: ContentWrapperProps) => {
  return <Box sx={{ display: "flex", justifyContent: "center", mb: mb ?? 2, mt: mt ?? 0 }}>{children}</Box>;
};
