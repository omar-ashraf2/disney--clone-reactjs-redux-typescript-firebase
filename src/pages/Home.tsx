import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import Recommends from "../components/Recommends";
import NewDisney from "../components/NewDisney";
import Originals from "../components/Originals";
import Trending from "../components/Trending";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../firebase";
import { setMovies } from "../app/movieSlice";

type Data = {
  backgroundImg: string;
  cardImg: string;
  description: string;
  subTitle: string;
  title: string;
  titleImg: string;
  type: string;
};

const Home = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.name);
  let recommends: Data[] = [];
  let newDisney: Data[] = [];
  let originals: Data[] = [];
  let trending: Data[] = [];

  useEffect(() => {
    onSnapshot(collection(db, "movies"), (snapshot) => {
      console.log(snapshot);

      // snapshot.docs.map((doc) => switch (doc.data().type) {
      //   case 'recommend':
      //     recommends.push({id: doc.id, ...doc.data()})
      //     break;
      //   default:
      //     break;
      // })
    });
  });
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
