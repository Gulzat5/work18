import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const studenData = [
  {
    neme: "Sagyn",
    id: 1,
    age: 17,
  },
  {
    neme: "Gulzat",
    id: 2,
    age: 18,
  },
  {
    neme: "Beku",
    id: 3,
    age: 18,
  },
];
export const Student = () => {
  const navigate = useNavigate();
  const DetailHandler = (el) => {
    navigate(`${el.id}/details`, { state: el });
  };
  return (
    <StudentContainer>
      {studenData.map((item) => {
        return (
          <ul key={item.id}>
            <ol>{item.neme}</ol>
            <p>{item.age}</p>

            <button onClick={() => DetailHandler(item)} key={item.id}>
              {" "}
              Details
            </button>

            <hr />
          </ul>
        );
      })}
    </StudentContainer>
  );
};
const StudentContainer = styled.div`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  width: 900px;
  height: 430px;
  text-align: center;
  margin: 3rem 0px 0px 3rem;
  display: flex;
  flex-direction: column;
`;
