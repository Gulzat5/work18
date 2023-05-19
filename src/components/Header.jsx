import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link to="/courses/materials">Material</Link>
        <Link to="/courses/student">Student</Link>
        <Link to="/courses/rating">Rating</Link>
      </HeaderContainer>
    </>
  );
};
const HeaderContainer = styled.div`
  background-color: #7535ff;
  width: 1000px;
  height: 150px;
  align-items: center;
  text-align: center;
  display: flex;
  justify-content: space-around;
  /* position: absolute;
  z-index: 4;
  margin-left: 22%; */
  /* bottom: 700px; */
`;
