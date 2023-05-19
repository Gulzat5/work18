import { Link, Outlet, useParams } from "react-router-dom";
import { styled } from "styled-components";

export const MaterialDetail = () => {
  const { id } = useParams();
  console.log(id, "state");

  return (
    <>
      <Container>
        <h2> Material Details Pages</h2>
        <h3> Detail id:{id}</h3>
      </Container>

      <LinkCon>
        <Linkk>
          <Link to="submitted">Submitted</Link>
          <Link to="waiting">Waiting</Link>
          <Link to="late">Late</Link>
        </Linkk>
        <Outlet />
      </LinkCon>
    </>
  );
};

const Container = styled.div`
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
  width: 900px;
  height: 200px;
  text-align: center;
  margin: 3rem 0px 0px 3rem;
  line-height: 4rem;
`;
const LinkCon = styled.div`
  background-color: #a28cef;

  width: 900px;
  height: 100px;
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const Linkk = styled.div`
  width: 900px;
  height: 200px;
  display: flex;
  gap: 40px;
  background-color: #b0f5de;
  justify-content: center;
`;
