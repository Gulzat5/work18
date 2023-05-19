import "./App.css";
import { styled } from "styled-components";
import { MainRouts } from "./components/MainRouts";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <Container>
      <Navigation />
      <MainRouts />
    </Container>
  );
}

export default App;
const Container = styled.div`
  display: flex;
`;
