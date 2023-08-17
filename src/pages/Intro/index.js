import React from "react";
import styled from "styled-components";

function Intro() {
  return (
    <>
      <Box>
        <TitleItalic>
          elderlinker
          <Title>elderlinker</Title>
        </TitleItalic>
      </Box>
      <Smart></Smart>
      <Computer></Computer>
      <Quiz></Quiz>
      <Gym></Gym>
      <Circle></Circle>
      <Circle></Circle>
      <Circle></Circle>
      <RoundedRectangle>
        <MyBadge>마이 뱃지</MyBadge>
      </RoundedRectangle>
      <BadgeInfo>
        위 과제들을 수행하면 마이페이지에서 마이뱃지를 얻으실 수 있습니다
      </BadgeInfo>
      <MyBadgeImg></MyBadgeImg>
    </>
  );
}
export default Intro;

const Box = styled.div`
  width: 1140px;
  height: 658px;
  background-color: #fffaf2;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const TitleItalic = styled.h1`
  font-size: 49px;
  color: #f5e6e9;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 90px;
  color: #cc435f;
  display: flex;
  justify-content: center;
  margin-top: -45px;
  position: absolute;
`;

const Smart = styled.div`
  width: 571px;
  height: 435px;
  background-image: url("https://ifh.cc/g/htsaGh.png");
  flex-direction: column;
  justify-content: center;
  margin-left: 445px;
`;

const Computer = styled.div`
  width: 571px;
  height: 435px;
  background-image: url("https://ifh.cc/g/9B29sP.png");
  flex-direction: column;
  justify-content: center;
  margin-left: 1020px;
`;

const Quiz = styled.div`
  width: 571px;
  height: 435px;
  background-image: url("https://ifh.cc/g/crc7SS.png");
  flex-direction: column;
  justify-content: center;
  margin-left: 445px;
`;

const Gym = styled.div`
  width: 571px;
  height: 435px;
  background-image: url("https://ifh.cc/g/8zLraq.png");
  flex-direction: column;
  justify-content: center;
  margin-left: 1020px;
`;

const Circle = styled.div`
  width: 13px;
  height: 13px;
  background-color: #c9c9c9;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 50px;
`;

const RoundedRectangle = styled.div`
  width: 192px;
  height: 62px;
  background-color: #e396a5;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 60px;
`;

const MyBadge = styled.div`
  font-size: 20pt;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin: auto;
`;

const BadgeInfo = styled.div`
  font-size: 18pt;
  color: #222222;
  display: flex;
  justify-content: center;
  margin: auto;
  margin-top: 40px;
`;

const MyBadgeImg = styled.div`
  width: 1147px;
  height: 218px;
  background-image: url("https://ifh.cc/g/ky7j26.png");
  flex-direction: column;
  justify-content: center;
  margin: auto;
  margin-top: 60px;
`;
