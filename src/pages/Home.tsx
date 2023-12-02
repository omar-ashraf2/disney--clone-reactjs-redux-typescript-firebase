import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import Recommends from "../components/Recommends";
import NewDisney from "../components/NewDisney";
import Originals from "../components/Originals";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 100px);
  top: 100px;
  overflow-x: hidden;
  padding: 0 calc(3.5vw + 5px);
  &::after {
    content: "";
    position: absolute;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    inset: 0px;
    z-index: -1;
  }
`;

export default Home;
