import React from "react";
import FlexBox from "../src/components/FlexBox";
import MainButton from "../src/components/MainButton";
import MainTitle from "../src/components/MainTitle";

export default function HomePage() {
  return (
    <FlexBox
      sx={{
        justifyContent: "space-around",
      }}
    >
      <div>
        <MainTitle text="Islom Shakhobiddinov" />
        <MainTitle text="Frontend Engineer" />
        <MainButton
          sx={{
            mt: 1,
          }}
        >
          <a href="/resume.pdf" download={"/resume.pdf"}>
            Resume
          </a>
        </MainButton>
      </div>
      <img src="/img1.png" />
    </FlexBox>
  );
}
