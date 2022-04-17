import { Box } from "@mui/material";
import React from "react";

export default function FlexBox({ children, sx }) {
  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 60)",
        flexDirection: {
          xs: "column",
          md: "row",
        },
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "transparent",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
}
