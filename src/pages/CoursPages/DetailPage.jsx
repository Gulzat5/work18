import React from "react";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

export const DetailPage = () => {
  const data = useLocation();
  const element = data.state;

  console.log(element, "data");
  return (
    <DetailCon>
      <h2>{element.neme}</h2>
      <h2>{element.age}</h2>
    </DetailCon>
  );
};
const DetailCon = styled.div`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  width: 900px;
  height: 430px;
  text-align: center;
  margin: 3rem 0px 0px 3rem;
  line-height: 4rem;
`;
