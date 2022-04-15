import { Button } from "@mui/material";
import React from "react";

export default function MainButton({ children, text, sx }) {
  return (
    <Button
      variant="contained"
      className="btnBg"
      sx={{
        fontSize: 17,
        minWidth: 100,
        py: 0.3,
        ...sx,
        "&:hover": {
          backgroundColor: "hover.main",
        },
      }}
    >
      {text}
      {children}
    </Button>
  );
}
