import { Box, Typography } from "@mui/material";
import React from "react";
import Typical from "react-typical";
import FlexBox from "../src/components/FlexBox";
import Typewriter from "typewriter-effect";

import MainButton from "../src/components/MainButton";
import MainTitle from "../src/components/MainTitle";

export default function HomePage() {
  return (
    <FlexBox
      sx={{
        justifyContent: "space-around",
      }}
    >
      <Box
        sx={{
          color: "#fff",
        }}
      >
        <MainTitle text="Hi, I'm Islom Shakhobiddinov" />
        <Box
          sx={{
            display: "flex",
            gap: 1,
            fontSize: 24,
            alignItems: "center",
            fontWeight: "bold",
          }}
        >
          <Typography
            sx={{
              fontSize: 24,
              mb: 0.5,
              fontWeight: "bold",
            }}
          >
            I&apos;m
          </Typography>
          <Typewriter
            options={{
              strings: ["Frontend Engineer"],
              autoStart: true,
              loop: true,
            }}
          />
        </Box>
        <MainButton
          sx={{
            mt: 1.5,
          }}
        >
          <a href="/resume.pdf" download={"/resume.pdf"}>
            Resume
          </a>
        </MainButton>
      </Box>
      <img src="/img1.png" />
    </FlexBox>
  );
}
