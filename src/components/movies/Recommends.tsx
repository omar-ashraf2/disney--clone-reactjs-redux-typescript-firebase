import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Container, Content, Wrap } from "./MovieStyles";

const Recommends = () => {
  const movies = useAppSelector((state) => state.movie.recommend);
  return (
    <Container>
      <h4>Recommended For You</h4>
      <Content>
        {movies &&
          movies.map((movie) => (
            <Wrap key={movie["id"]}>
              <Link to={"/detail/" + movie["id"]}>
                <img src={movie["cardImg"]} alt={movie["title"]} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default Recommends;
