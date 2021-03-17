import React from "react";
import { Grid } from "../";
import { useState } from "react";
import {
  Input,
  Label,
  Button,
  Name,
  Option,
  Title,
  Type,
  Filter,
  Wrapper,
} from "./explore.styles";
import { Container } from "../../globalStyles/theme";

const Explore = () => {
  const [
    filter = { minPrice: 10, maxPrice: 100, minHour: 1, maxHour: 5 },
    setFilter,
  ] = useState();
  const [active, setActive] = useState(false);

  function onSave() {
    console.log(filter);
  }
  return (
    <Wrapper>
      <Container>
        <Title>Guides</Title>
        <Filter>
          <Type>
            <Name>Location</Name>
          </Type>
          <Type>
            <Name>Duration</Name>
            <Option active={active}>
              <Input
                type="number"
                placeholder="min-price"
                value={filter.minHour}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    minHour: parseInt(e.target.value, 10),
                  })
                }
              />
              <Input
                type="number"
                placeholder="max-price"
                value={filter.maxHour}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    maxHour: parseInt(e.target.value, 10),
                  })
                }
              />
              <Button onClick={onSave}>Save</Button>
            </Option>
          </Type>
          <Type>
            <Name>Price</Name>
            <Option active={active}>
              <Input
                type="number"
                placeholder="min-price"
                value={filter.minPrice}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    minPrice: parseInt(e.target.value, 10),
                  })
                }
              />
              <Input
                type="number"
                placeholder="max-price"
                value={filter.maxPrice}
                onChange={(e) =>
                  setFilter({
                    ...filter,
                    maxPrice: parseInt(e.target.value, 10),
                  })
                }
              />
              <Button onClick={onSave}>Save</Button>
            </Option>
          </Type>
        </Filter>
        <Grid />
      </Container>
    </Wrapper>
  );
};

export default Explore;
