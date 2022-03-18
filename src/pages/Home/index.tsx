import { Card, CustomLink, Navbar } from "@components/index";
import images from "@shared/utils/import-images";
import data from "@src/dummyData.json";
import { FC } from "react";
import { CarsBoard } from "./styles";

const Home: FC<{}> = (_) => {
  return (
    <div>
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
    </div>
  );
};

export default Home;
