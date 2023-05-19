import React from "react";
import { styled } from "styled-components";

export const Notification = () => {
  return (
    <Container>
      <h2>Notification</h2>
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
