import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import { Container, Content, Wrap } from "./MovieStyles";

const NewDisney = () => {
  const movies = useAppSelector((state) => state.movie.newDisney);

  return (
    <Container>
      <h4>New to Disney+</h4>
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

export default NewDisney;
