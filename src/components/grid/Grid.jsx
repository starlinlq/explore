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
  Content,
  Wrapper,
  Icon,
} from "./grid.styles";
import "./styles.css";
import Masonry from "react-masonry-css";
import { IoTimerOutline, IoPricetagOutline } from "react-icons/io5";

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
      "https://images.pexels.com/photos/1703314/pexels-photo-1703314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
      "https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
      "https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
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
          <Card key={content.id} height={content.height} img={content.img}>
            <Content>
              <Title>{content.title}</Title>
              <Wrapper>
                <Price>
                  <Icon>
                    <IoPricetagOutline />
                  </Icon>

                  <span> {content.price}</span>
                </Price>
                <Time>
                  <Icon>
                    <IoTimerOutline />
                  </Icon>

                  <span> {content.time}</span>
                </Time>
              </Wrapper>
            </Content>
          </Card>
        ))}
      </Masonry>
    </Cards>
  );
};

export default Grid;
