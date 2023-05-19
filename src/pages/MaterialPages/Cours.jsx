import React from "react";
import { Header } from "../../components/Header";
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";

export const Cours = () => {
  return (
    <>
      <CoursCon>
        <Header />
        <Outlet />
      </CoursCon>
    </>
  );
};
const CoursCon = styled.div`
  /* display: flex;
  flex-direction: column;
  gap: 300px; */
`;
