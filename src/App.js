import styled from "styled-components";
import { FaTwitter, FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import "./App.css";
import { VscColorMode } from "react-icons/vsc";
import { FiTriangle } from "react-icons/fi";

function App() {
  function mode() {}

  return (
    <>
      <Navbar>
        <Img src="./images/a.png" alt="" />
        <Nav>
          <ul>
            <li>Case Studies</li>
            <li> Experiment</li>
            <li> Contact</li>
            <li>
              <VscColorMode fontSize="25px" />
            </li>
          </ul>
        </Nav>
      </Navbar>

      <Container>
        <Background src="./images/untitled.png" alt=""></Background>

        <Triangle>
          <FiTriangle />
        </Triangle>
        <Square>
          <FiTriangle />
        </Square>

        <Name>
          <About>
            <strong>Amit Singh</strong>
            <span>Level-1 Developer</span>
            <button>About me </button>
          </About>
          <Link>
            <a href="">
              <FaTwitter fontSize="25px" />
            </a>
            <a href="">
              <FaGithub fontSize="25px" />
            </a>
            <a href="">
              <FaInstagram fontSize="25px" />
            </a>
            <a href="">
              <FaLinkedinIn fontSize="25px" />
            </a>
          </Link>
        </Name>
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  position: relative;
  height: calc(100vh - 70px);
  /* margin: 0;
  
  padding: 0; */
  border: 1px solid transparent;
`;

const Navbar = styled.div`
  /* margin-top: 5px; */
  margin-left: 140px;
  margin-right: 80px;
  height: 70px;
  /* padding: 10px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Background = styled.img`
  width: 400px;
  position: absolute;
  top: 45%;
  left: 60%;
  transform: translate(-20%, -50%);
  z-index: -1;
`;
const Img = styled.img`
  height: 100%;
`;

const Nav = styled.div`
  ul {
    display: flex;
    align-items: center;
    color: #b0b2c3;
    font-weight: bold;
    font-size: 17px;
    li {
      cursor: pointer;
      list-style: none;
      margin-right: 50px;
    }
  }
`;

const Name = styled.div`
  /* padding-left: 400px; */
  margin-top: 200px;
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
const About = styled.div`
  width: 100%;
  height: 100%;
  /* border: 2px solid white; */
  display: flex;
  flex-direction: column;
  padding-left: 5px;
  /* align-items: center; */
  justify-content: center;
  margin-left: 180px;

  strong {
    font-size: 80px;
    /* border: 2px solid red; */
  }

  span {
    display: inline-block;
    font-style: italic;
  }

  button {
    width: 100px;
    padding: 10px;
    margin-top: 40px;
    border-radius: 4px;
    background-color: #f06449;
    color: white;
    font-weight: bold;
  }
  /* text-align: center; */
  /* flex: 1; */
`;
const Link = styled.div`
  height: 150%;
  margin-right: 40px;
  /* border: 2px solid red; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  /* margin-left: 200px; */

  a {
    color: #b0b2c3;

    &:hover {
      transition: 0.5s;
      color: white;
    }
  }
`;

const Triangle = styled.div`
  position: absolute;
  top: 60%;
  left: 30%;
  z-index: 20;
`;
const Square = styled.div``;
