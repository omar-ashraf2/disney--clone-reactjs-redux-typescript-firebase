import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Container, Content, Wrap } from "./MovieStyles";

const Trending = () => {
  const movies = useAppSelector((state) => state.movie.trending);

  return (
    <Container>
      <h4>Trending</h4>
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

export default Trending;
