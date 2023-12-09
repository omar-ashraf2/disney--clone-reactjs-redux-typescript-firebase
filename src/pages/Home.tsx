import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import Recommends from "../components/movies/Recommends";
import NewDisney from "../components/movies/NewDisney";
import Originals from "../components/movies/Originals";
import Trending from "../components/movies/Trending";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { onSnapshot, collection } from "firebase/firestore";
import db from "../firebase";
import { setMovies } from "../app/movieSlice";

type Data = {
  id?: string;
  backgroundImg?: string;
  cardImg?: string;
  description?: string;
  subTitle?: string;
  title?: string;
  titleImg?: string;
  type?: string;
};

const Home = () => {
  const dispatch = useAppDispatch();
  const userName = useAppSelector((state) => state.user.name);

  useEffect(() => {
    let recommends: Data[] = [];
    let newDisney: Data[] = [];
    let originals: Data[] = [];
    let trending: Data[] = [];
    onSnapshot(collection(db, "movies"), (snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            newDisney = [...newDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
          default:
            break;
        }
      });
      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisney,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [dispatch, userName]);

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
