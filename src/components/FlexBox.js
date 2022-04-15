import { Box } from "@mui/material";
import React from "react";

export default function FlexBox({ children, sx }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        justifyContent: "space-around",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
