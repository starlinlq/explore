import React from "react";
import {
  City,
  Guide,
  Title,
  Card,
  Cards,
  Price,
  Time,
  Type,
} from "./grid.styles";
import "./styles.css";
import Masonry from "react-masonry-css";

const data = [
  {
    id: 1,
    height: "250px",
    title: "The best of Zurich",
    price: "$80",
    time: "3 hours",
    guide: "Tim Hendricks",
    type: "City Guide",
    img:
      "https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
  },
  {
    id: 2,
    height: "450px",
    title: "The best of Zurich",
    price: "$80",
    time: "3 hours",
    guide: "Tim Hendricks",
    type: "City Guide",
    img:
      "https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 3,
    height: "250px",
    title: "The best of Zurich",
    price: "$80",
    time: "3 hours",
    guide: "Tim Hendricks",
    type: "City Guide",
    img:
      "https://images.pexels.com/photos/461956/pexels-photo-461956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 4,
    height: "450px",
    title: "The best of Zurich",
    price: "$80",
    time: "3 hours",
    guide: "Tim Hendricks",
    type: "City Guide",
    img:
      "https://images.pexels.com/photos/461956/pexels-photo-461956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 5,
    height: "250px",
    title: "The best of Zurich",
    price: "$80",
    time: "3 hours",
    guide: "Tim Hendricks",
    type: "City Guide",
    img:
      "https://images.pexels.com/photos/461956/pexels-photo-461956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
  {
    id: 6,
    height: "450px",
    title: "The best of Zurich",
    price: "$80",
    time: "3 hours",
    guide: "Tim Hendricks",
    type: "City Guide",
    img:
      "https://images.pexels.com/photos/461956/pexels-photo-461956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
  },
];

const Grid = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  };
  return (
    <Cards>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column "
      >
        {data.map((content) => (
          <Card
            key={content.id}
            height={content.height}
            img={content.img}
          ></Card>
        ))}
      </Masonry>
    </Cards>
  );
};

export default Grid;
