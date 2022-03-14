import { FC } from "react";
import { Navbar } from "../../components";
import Card from "../../components/Card";
import imagem from "../../assets/images/ac01.png";
import { CarsBoard } from "./styles";

interface HomeProps {}

const Home: FC<HomeProps> = (props) => {
  return (
    <>
      <Navbar />
      <CarsBoard>
      <Card brand="Ferrari" model="California" price={725} image={imagem} />
      <Card brand="Ferrari" model="California" price={725} image={imagem} />
      </CarsBoard>
    </>
  );
};

export default Home;
