import React from "react";
import { Container } from "../../globalStyles/theme";
import img from "../../images/1.png";
import { Content, Feed, Picture, Quote, Icon, Text } from "./reviews.styles";
import { useState, useEffect } from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Reviews = () => {
  const contentData = {
    mobileData: [
      {
        key: 1,
        bottom: "",
        right: "",
        top: "200px",
        left: "50px",
        src:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        key: 2,
        top: "",
        bottom: "170px",
        right: "",
        left: "200px",
        src:
          "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },

      {
        key: 3,
        top: "",
        bottom: "170px",
        right: "200px",
        left: "",
        src:
          "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },

      {
        key: 4,
        top: "150px",
        bottom: "",
        right: "55px",
        left: "",
        src:
          "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },

      {
        key: 5,
        top: "230px",
        bottom: "",
        right: "150px",
        left: "",
        src:
          "https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        alt: "profile",
      },
    ],

    desktopData: [
      {
        key: 6,
        bottom: "",
        right: "",
        top: "200px",
        left: "120px",
        src:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        key: 7,
        top: "",
        bottom: "100px",
        right: "",
        left: "300px",
        src:
          "https://images.pexels.com/photos/2078265/pexels-photo-2078265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        key: 8,
        top: "",
        bottom: "230px",
        right: "350px",
        left: "",
        src:
          "https://images.pexels.com/photos/943084/pexels-photo-943084.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        key: 9,
        top: "200px",
        bottom: "",
        right: "",
        left: "400px",
        src:
          "https://images.pexels.com/photos/2406949/pexels-photo-2406949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        key: 10,
        top: "50px",
        bottom: "",
        right: "350px",
        left: "",
        src:
          "https://images.pexels.com/photos/1310474/pexels-photo-1310474.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        alt: "profile",
      },
      {
        key: 11,
        top: "130px",
        bottom: "",
        right: "50px",
        left: "",
        src:
          "https://images.pexels.com/photos/4817064/pexels-photo-4817064.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        alt: "profile",
      },
    ],
  };

  const [data, setData] = useState(contentData.desktopData);

  const updateMedia = () => {
    if (window.innerWidth < 600) {
      setData(contentData.mobileData);
      return;
    }
    setData(contentData.desktopData);
  };

  useEffect(function () {
    window.addEventListener("resize", updateMedia);

    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  return (
    <Content img={img}>
      <Feed>
        {data.map((content, i) => (
          <div key={content.key}>
            <Picture
              top={content.top}
              right={content.right}
              left={content.left}
              bottom={content.bottom}
              src={content.src}
            >
              <Quote>
                <Icon>
                  {" "}
                  <ImQuotesLeft />
                </Icon>
                <Text>
                  We wander for distraction, but we travel for fulfilment.
                </Text>
                <Icon>
                  <ImQuotesRight />
                </Icon>
              </Quote>
            </Picture>
          </div>
        ))}
      </Feed>
    </Content>
  );
};

export default Reviews;
