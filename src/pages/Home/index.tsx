import { FC } from "react";
import { Navbar } from "../../components";
import Card from "../../components/Card";
import { CarsBoard } from "./styles";
import data from "../../dummyData.json";
import images from "../../shared/utils/import-images";
import CustomLink from "../../components/CustomLink";

interface HomeProps {}

interface Car {
  id: string;
  brand: string;
  model: string;
  price: number;
}

const Home: FC<HomeProps> = (props) => {
  return (
    <>
      <Navbar />
      <CarsBoard>
        {data.cars.map((car: any) => {
          return (
            <CustomLink to={`/details/${car.id}`} key={car.id}>
              <Card
                brand={car.brand}
                model={car.model}
                price={car.price}
                image={images[`${car.id}.png`]}
              />
            </CustomLink>
          );
        })}
      </CarsBoard>
    </>
  );
};

export default Home;
