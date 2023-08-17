import React from "react";
import { useNavigation } from "../../hooks/navigation";

import styled from "styled-components";
import { secondaryColor, tertiaryColor } from "../../styles/colors";
import { media } from "../../styles/mixin";
import ShortcutItem from "./shortcut-item.component";

function Main() {
    const { goToIntro } = useNavigation();

    return (
        <>
            <Intro>
                <Wrap>
                    <Title>
                        디지털 격차를 해소하기 위한
                        <br />
                        연결 통로
                        <TitleName> ‘에더링커’</TitleName>
                    </Title>
                    <Description>
                        컴퓨터 사용법, 스마트폰 사용법, 노인 질환에 관한 정보
                        등을 습득할 수 있습니다.
                    </Description>
                    <StartButton onClick={goToIntro}>시작하기</StartButton>
                </Wrap>
            </Intro>
            <Shortcut>
                <Wrap>
                    <ShortcutItem title="intro" />
                    <ShortcutItem title="smartphone" />
                    <ShortcutItem title="computer" />
                    <ShortcutItem title="quiz" />
                    <ShortcutItem title="gym" />
                </Wrap>
            </Shortcut>
        </>
    );
}

export default Main;

const Intro = styled.div`
    width: 100%;
    height: 660px;
    background-image: url("https://kr.object.ncloudstorage.com/elderlinker/main.png");
    background-size: cover;
    background-position: center center;

    ${media.tablet`
        height: 600px;
        background-image: url("https://kr.object.ncloudstorage.com/elderlinker/main-origin.png");
    `}

    ${media.mobile`
        height: 300px;
        margin-top: 50px;
    `}
`;

const Shortcut = styled.div`
    width: 100%;
    height: 390px;
    background-color: #fbe4c4;

    ${media.tablet`
        height: auto;
        padding: 30px 0 20px 0;
    `}

    ${media.mobile`
        height: auto;
        padding: 20px 0 10px 0;
    `}
`;

const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1280px;
    height: 100%;
    margin: 0 auto;

    ${Intro} > & {
        flex-direction: column;
        justify-content: center;
    }

    ${Shortcut} > & {
        justify-content: space-between;
        align-items: center;
    }

    ${media.tablet`
        width: 100%; 
        text-align: center;

        ${Shortcut} > & {
            padding: 0 30px;
        }
    `}

    ${media.mobile`
        ${Shortcut} > & {
            padding: 0 20px;
        }
    `}
`;

const Title = styled.p`
    font-size: 5.4rem;
    font-weight: 600;
    color: ${tertiaryColor};

    ${media.tablet`
        font-size: 5rem;
        margin-bottom: 10px
    `}

    ${media.mobile`
        font-size: 2.5rem;
        margin-bottom: 5px;
    `}
`;

const TitleName = styled.span`
    font-weight: 600;
    color: #cd4f40;
`;

const Description = styled.p`
    font-size: 2rem;
    font-weight: 500;
    color: #40546d;
    margin-bottom: 50px;
    padding: 0 20px;

    ${media.mobile`
        font-size: 1.3rem;
        margin-bottom: 30px;
    `}
`;

const StartButton = styled.button`
    width: 290px;
    font-size: 2.7rem;
    font-weight: 500;
    color: #fff;
    background-color: ${secondaryColor};
    border-radius: 10px;
    padding: 10px 25px;

    ${media.tablet`
        width: 250px;
        font-size: 2.2rem;
        margin: 0 auto;
    `}

    ${media.mobile`
        width: 160px;
        font-size: 1.4rem;
    `}
`;
