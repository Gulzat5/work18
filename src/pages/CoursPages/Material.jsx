import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const materialDate = [
  {
    title: "Material 1",
    id: 1,
  },
  {
    title: "Material 2",
    id: 2,
  },
];

export const Material = () => {
  const navigate = useNavigate();

  const materialHandl = (id) => {
    navigate(`${id}/details`);
  };

  return (
    <Container>
      <>
        <button> Add new material</button>
      </>
      {materialDate.map((item) => {
        return (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <button onClick={() => materialHandl(item.id)} key={item.id}>
              Detalis
            </button>
          </div>
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  width: 600px;
  height: 400px;
`;
