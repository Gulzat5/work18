import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export const Anouncement = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h2>Anoucement</h2>
      <Button Button onClick={() => navigate("/courses/student")}>
        {" "}
        Go to student page{" "}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  width: 900px;
  height: 430px;
  text-align: center;
  margin: 3rem 0px 0px 3rem;
  display: flex;
  flex-direction: column;
`;

const Button = styled.div`
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border-radius: 5px;
  border: none;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  background: #57cc99;
  z-index: 1;

  :hover:after {
    width: 100%;
    left: 0;
  }
  :after {
    border-radius: 5px;
    position: absolute;
    content: "";
    width: 0;
    height: 100%;
    top: 0;
    z-index: -1;
    box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
      7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    background-color: #80ed99;
    right: 0;
  }
  :active {
    top: 2px;
  }
`;
