import { Typography } from "@mui/material";
import React from "react";

export default function MainTitle({ text }) {
  return (
    <Typography
      sx={{
        fontSize: {
          xs: 20,
          sm: 25,
          md: 30,
        },
        fontWeight: "bold",
      }}
    >
      {text}
    </Typography>
  );
}
