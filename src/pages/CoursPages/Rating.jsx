import React from "react";
import { styled } from "styled-components";

export const Rating = () => {
  return (
    <RatingCon>
      <h2>Rating pages</h2>
    </RatingCon>
  );
};

const RatingCon = styled.div`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  width: 900px;
  height: 430px;
  text-align: center;
  margin: 3rem 0px 0px 3rem;
  line-height: 4rem;
`;
