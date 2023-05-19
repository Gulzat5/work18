import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Navigation = () => {
  return (
    <>
      <LinkCons>
        <h1>LOGO</h1>
        <Link to="/courses">Cours</Link>
        <Link to="/anoucements">anoucements</Link>
        <Link to="/schedule">shedule</Link>
        <Link to="/notification">notification</Link>
      </LinkCons>
    </>
  );
};

const LinkCons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  background-color: #dfdedb;
  width: 300px;
  height: 650px;
`;
