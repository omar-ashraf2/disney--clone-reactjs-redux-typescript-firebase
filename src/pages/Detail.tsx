import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";
import { doc, getDoc } from "firebase/firestore";

type Details = {
  backgroundImg?: string;
  titleImg?: string;
  title?: string;
  subTitle?: string;
  description?: string;
};

const Detail = () => {
  const { id } = useParams();
  console.log(id);
  const [detailData, setDetailData] = useState<Details>({});

  useEffect(() => {
    const docRef = doc(db, "movies", id);
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          setDetailData(doc.data());
        } else {
          console.log("No Document");
        }
      })
      .catch((error: string) => {
        console.log("Error getting document: " + error);
      });
  }, [id]);

  // useEffect(() => {
  //   collection(db, "movies")
  //     .doc(id)
  //     .get()
  //     .then((doc) => {
  //       if (doc.exists()) {
  //         setDetailData(doc.data());
  //       } else {
  //         console.log("No Document");
  //       }
  //     });
  // }, [id]);

  return (
    <Container>
      <BackGround>
        <img src={detailData.backgroundImg} alt={detailData.title} />
      </BackGround>
      <ImageTitle>
        <img src={detailData.titleImg} alt={detailData.title} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="Play" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="Trailer" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 100px);
  top: 100px;
  overflow-x: hidden;
  padding: 0 calc(3.5vw + 5px);
`;
const BackGround = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 100px;
  opacity: 0.8;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 1010px) {
      width: 100%;
      object-fit: cover;
    }
  }
`;
const ImageTitle = styled.div`
  align-items: flex-end;
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  margin: 0 auto;
  height: 50vh;
  min-height: 170px;
  padding-bottom: 24px;
  width: 100%;
  img {
    max-width: 600px;
    min-width: 200px;
    width: 35vw;
    @media (max-width: 768px) {
      width: 50vw;
    }
  }
  @media (max-width: 768px) {
    height: 40vw;
  }
`;
const ContentMeta = styled.div`
  max-width: 874px;
`;
const Controls = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  margin: 24px 0;
  min-height: 56px;
`;
const Player = styled.button`
  display: flex;
  font-size: 15px;
  margin: 0px 22px 0px 0px;
  padding: 0px 24px;
  height: 56px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  letter-spacing: 1.8px;
  text-align: center;
  text-transform: uppercase;
  border: none;
  color: black;
  background-color: white;
  cursor: pointer;
  img {
    width: 32px;
  }
  &:hover {
    background-color: rgb(198, 198, 198);
  }
  @media (max-width: 768px) {
    height: 45px;
    padding: 0px 12px;
    font-size: 12px;
    margin: 0px 10px 0px 0px;
    img {
      width: 25px;
    }
  }
`;
const Trailer = styled(Player)`
  background-color: #00000033;
  color: white;
  border: 1px solid white;
`;
const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000060;
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: white;
    display: inline-block;
    &:first-child {
      height: 2px;
      width: 16px;
      transform: translate(1px, 0px) rotate(0deg);
    }
    &:last-child {
      height: 16px;
      width: 2px;
      transform: translateX(-8px) rotate(0deg);
    }
  }
`;
const GroupWatch = styled.div`
  height: 44px;
  width: 44px;
  display: flex;
  border-radius: 50%;
  border: 2px solid white;
  justify-content: center;
  align-items: center;
  background-color: #00000060;
  cursor: pointer;
  div {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    img {
      width: 100%;
    }
  }
`;
const SubTitle = styled.div`
  min-height: 20px;
  font-size: 15px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  padding: 16px 0;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export default Detail;
