import styled from "styled-components";

const navMenu = [
  {
    id: 1,
    img: "/images/home-icon.svg",
    text: "HOME",
    page: "/home",
  },
  {
    id: 2,
    img: "/images/search-icon.svg",
    text: "SEARCH",
    page: "/search",
  },
  {
    id: 3,
    img: "/images/watchlist-icon.svg",
    text: "WATCHLIST",
    page: "/watchlist",
  },
  {
    id: 4,
    img: "/images/original-icon.svg",
    text: "ORIGINALS",
    page: "/originals",
  },
  {
    id: 5,
    img: "/images/movie-icon.svg",
    text: "MOVIES",
    page: "/movies",
  },
  {
    id: 6,
    img: "/images/series-icon.svg",
    text: "SERIES",
    page: "/series",
  },
];

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  padding: 0 36px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* letter-spacing: 16px; */
  z-index: 3;
`;
const Logo = styled.a`
  width: 80px;
  max-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 25px;
      min-width: 25px;
      width: 25px;
      z-index: auto;
    }
    span {
      color: rgb(249, 249, 249);
      font-size: 14px;
      margin-top: 5px;
      margin-left: 2px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      white-space: nowrap;
      position: relative;
      &::before {
        content: "";
        position: absolute;
        height: 3px;
        background-color: rgb(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -7px;
        right: 0;
        left: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        width: auto;
        visibility: hidden;
      }
    }
    &:hover {
      span::before {
        transform: scaleX(1);
        visibility: visible;
      }
    }
  }
  /* @media (max-width: 768px) {
    display: none;
  } */
`;

const Navbar = () => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Disney+" />
      </Logo>
      <NavMenu>
        {navMenu.map((link) => (
          <a href={link.page} key={link.id}>
            <img src={link.img} alt={link.text} />
            <span>{link.text}</span>
          </a>
        ))}
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
