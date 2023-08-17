import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";
import { useNavigation } from "../../hooks/navigation";

function Quiz() {
    const { goToQuizDetail } = useNavigation();

    return (
        <MainWrap>
            <Main>
                <Text>
                    노인 질환 퀴즈
                    <Description>
                        퀴즈를 통해 노인 질환에 대해 알아 볼 수 있습니다.
                    </Description>
                    <StartButton onClick={goToQuizDetail}>시작하기</StartButton>
                </Text>
            </Main>
        </MainWrap>
    );
}

export default Quiz;

const MainWrap = styled.div`
    width: 100%;
    height: calc(100vh - 90px - 130px);
    background-image: url("https://kr.object.ncloudstorage.com/elderlinker/main-quiz.png");
    background-size: cover;
    background-position: left center;

    ${media.tablet`
        height: calc(100vh - 80px - 80px);
        background-size: initial;
        background-repeat: no-repeat;
        background-color: #f3fbff;
        background-position: bottom left;
    `}

    ${media.mobile`
        height: calc(100vh - 50px - 50px);
        background-size: 250%;
        margin-top: 50px;
    `}
`;

const Main = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    width: 1280px;
    height: 100%;
    margin: 0 auto;

    ${media.tablet`
        width: 100%;
        justify-content: flex-start;
        padding-top: 150px;
    `}

    ${media.mobile`
        padding-top: 100px;
    `}
`;

const Text = styled.div`
    width: 50%;
    font-size: 5.4rem;
    font-weight: 600;
    color: #4c8aac;

    ${media.tablet`
        width: 100%;
        text-align: center;
    `}

    ${media.mobile`
        font-size: 3.8rem;
    `}
`;

const Description = styled.p`
    font-size: 2rem;
    font-weight: 500;
    color: #40546d;
    margin: 10px 0 30px 0;

    ${media.mobile`
        font-size: 1.4rem;
        margin: 5px 0 20px 0;
    `}
`;

const StartButton = styled.button`
    font-size: 2rem;
    font-weight: 500;
    color: #40546d;
    background-color: #fff;
    padding: 10px 30px;
    border-radius: 5px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    ${media.mobile`
        font-size: 1.6rem;
    `}
`;
