import React, { useState, useEffect } from "react";
import { useNavigation } from "../../hooks/navigation";
import styled from "styled-components";
import { primaryColor } from "../../styles/colors";
import { media } from "../../styles/mixin";

import { FiMenu } from "react-icons/fi";
import { BiEdit, BiHelpCircle, BiUserCircle } from "react-icons/bi";
import { BsPhone } from "react-icons/bs";
import { RiComputerLine } from "react-icons/ri";
import { AiOutlinePlayCircle } from "react-icons/ai";

function Header() {
    const navigation = useNavigation();
    const [currentPage, setCurrentPage] = useState(null);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    const routesMap = {
        "/": { name: "home", action: navigation.goToHome },
        "/intro": { name: "intro", action: navigation.goToIntro },
        "/computer": { name: "edu", action: navigation.goToComputer },
        "/smartphone": {
            name: "edu",
            action: navigation.goToSmartphone,
        },
        "/quiz": { name: "edu", action: navigation.goToQuiz },
        "/quiz/detail": { name: "edu", action: navigation.goToQuizDetail },
        "/gym": { name: "gym", action: navigation.goToGym },
        "/mypage": { name: "mypage", action: navigation.goToMypage },
        "/signin": { name: "signin", action: navigation.goToSignIn },
        "/signup": { name: "signup", action: navigation.goToSignUp },
    };

    useEffect(() => {
        setCurrentPage(routesMap[window.location.pathname]?.name || null);
    }, []);

    const handleNavigation = (path) => {
        const route = routesMap[path];
        if (route) {
            route.action();
            setIsHamburgerOpen(false);
            setCurrentPage(route.name);
        }
    };

    return (
        <HeaderWrap>
            <LogoWrap>
                <LogoImage
                    src="https://kr.object.ncloudstorage.com/elderlinker/logo-horizontal.png"
                    alt="logo"
                    onClick={() => handleNavigation("/")}
                ></LogoImage>
            </LogoWrap>
            <NavWrap>
                <FirstUl>
                    <FirstLi
                        onClick={() => handleNavigation("/intro")}
                        isClickable={true}
                        isActive={currentPage === "intro"}
                    >
                        소개
                    </FirstLi>
                    <Divider />
                    <FirstLi
                        isClickable={false}
                        isActive={currentPage === "edu"}
                    >
                        교육
                        <SecondUl>
                            <SecondLi
                                onClick={() => handleNavigation("/computer")}
                            >
                                컴퓨터 교육
                            </SecondLi>
                            <SecondLi
                                onClick={() => handleNavigation("/smartphone")}
                            >
                                스마트폰 교육
                            </SecondLi>
                            <SecondLi onClick={() => handleNavigation("/quiz")}>
                                질병 퀴즈
                            </SecondLi>
                        </SecondUl>
                    </FirstLi>
                    <Divider />
                    <FirstLi
                        isClickable={true}
                        onClick={() => handleNavigation("/gym")}
                        isActive={currentPage === "gym"}
                    >
                        체조 영상
                    </FirstLi>
                    <Divider />
                    <FirstLi
                        isClickable={true}
                        onClick={() => handleNavigation("/mypage")}
                        isActive={currentPage === "mypage"}
                    >
                        마이페이지
                    </FirstLi>
                </FirstUl>
            </NavWrap>
            <ButtonWrap>
                <SignButton onClick={() => handleNavigation("/signin")}>
                    로그인
                </SignButton>
                <SignButton onClick={() => handleNavigation("/signup")}>
                    회원가입
                </SignButton>
                {/* <SignButton>로그아웃</SignButton> */}
            </ButtonWrap>

            {isHamburgerOpen && (
                <HamburgerMenu $isOpen={isHamburgerOpen}>
                    <HamburgerNavWrap>
                        <HamburgerNavUl>
                            <HamburgerNavLi
                                onClick={() => handleNavigation("/intro")}
                            >
                                <BiEdit />
                                소개
                            </HamburgerNavLi>
                            <HamburgerNavLi
                                onClick={() => handleNavigation("/computer")}
                            >
                                <RiComputerLine />
                                컴퓨터 교육
                            </HamburgerNavLi>
                            <HamburgerNavLi
                                onClick={() => handleNavigation("/smartphone")}
                            >
                                <BsPhone />
                                스마트폰 교육
                            </HamburgerNavLi>
                            <HamburgerNavLi
                                onClick={() => handleNavigation("/quiz")}
                            >
                                <BiHelpCircle />
                                질병 퀴즈
                            </HamburgerNavLi>
                            <HamburgerNavLi
                                onClick={() => handleNavigation("/gym")}
                            >
                                <AiOutlinePlayCircle />
                                체조 영상
                            </HamburgerNavLi>
                            <HamburgerNavLi
                                onClick={() => handleNavigation("/mypage")}
                            >
                                <BiUserCircle />
                                마이페이지
                            </HamburgerNavLi>
                        </HamburgerNavUl>
                    </HamburgerNavWrap>
                    <HamburgerButtonWrap>
                        <HamburgerButton
                            onClick={() => handleNavigation("/signin")}
                        >
                            로그인
                        </HamburgerButton>
                        <HamburgerButton
                            onClick={() => handleNavigation("/signup")}
                        >
                            회원가입
                        </HamburgerButton>
                    </HamburgerButtonWrap>
                </HamburgerMenu>
            )}
            <HamburgerIcon onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}>
                <FiMenu />
            </HamburgerIcon>
        </HeaderWrap>
    );
}

export default Header;

const HeaderWrap = styled.header`
    display: flex;
    justify-content: space-between;
    height: 90px;
    padding: 0 40px;

    ${media.tablet`
        height: 80px;
        padding: 0 30px;
    `}

    ${media.mobile`
        width: 100%;
        background: #fff;
        height: 50px;
        padding: 0 20px;
        position: fixed;
        top: 0;
        left: 0;
    `}
`;

const LogoWrap = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

const LogoImage = styled.img`
    height: 40px;
    cursor: pointer;

    ${media.tablet`
        height: 30px;
    `}

    ${media.mobile`
        height: 23px;
    `}
`;

const NavWrap = styled.nav`
    & li {
        text-align: center;
    }

    ${media.mobile`
        display: none;
    `}
`;

const FirstUl = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
`;

const FirstLi = styled(({ isClickable, isActive, ...rest }) => (
    <li {...rest} />
))`
    display: flex;
    align-items: center;
    height: 100%;
    position: relative;
    padding: 0 30px;
    cursor: ${({ isClickable }) => (isClickable ? "pointer" : "default")};

    &::before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 5px;
        background: ${primaryColor};
        transform: scaleX(0);
        transform-origin: bottom right;
        ${({ isActive }) =>
            isActive &&
            `
            transform: scaleX(1);
            transform-origin: bottom left;
        `}
    }

    &:not(:nth-of-type(2)):hover {
        &::before {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
    }

    ${media.tablet`
        padding: 0 15px;
    `}
`;

const Divider = styled.div`
    align-self: center;
    width: 2px;
    height: 2px;
    background-color: #000;
    border-radius: 50%;
    margin: 0 10px;

    ${media.tablet`
        margin: 0 5px;
    `}
`;

const SecondUl = styled.ul`
    width: 150%;
    position: absolute;
    top: 100%;
    left: 50%;
    background: #fff;
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%, -10px);
    transition: opacity 0.3s, transform 0.3s;

    ${FirstLi}:hover & {
        visibility: visible;
        opacity: 1;
        transform: translate(-50%, 0px);
    }

    ${media.tablet`
        width: 200%;
    `}
`;

const SecondLi = styled.li`
    padding: 15px 0;
    cursor: pointer;

    ${media.tablet`
        padding: 10px 0;
    `}
`;

const ButtonWrap = styled.div`
    display: flex;
    align-items: center;
    height: 100%;

    ${media.mobile`
        display: none;
    `}
`;

const SignButton = styled.button`
    background-color: transparent;
    color: #d0516a;

    &:last-of-type {
        margin-left: 20px;
    }

    ${media.tablet`
        &:last-of-type {
            margin-left: 10px;
        }
    `}
`;

/* 햄버거 메뉴 스타일 시작 */
const HamburgerIcon = styled.div`
    display: none;
    font-size: 2rem;
    color: ${primaryColor};
    cursor: pointer;

    ${media.mobile`
        display: flex;
        align-items: center;
    `}
`;

const HamburgerMenu = styled.div`
    position: fixed;
    top: 50px;
    right: -100%;
    width: 100%;
    height: calc(100% - 50px);
    background: #fff;
    overflow-y: hidden;
    transition: right 0.5s;
    padding: 20px;
    z-index: 9999;

    ${(props) => props.$isOpen && `right: 0;`}
`;

const HamburgerNavWrap = styled.nav``;

const HamburgerNavUl = styled.ul``;

const HamburgerNavLi = styled.li`
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
    padding-bottom: 15px;
    transition: all 0.3s;
    font-size: 1.5rem;

    & > svg {
        margin-right: 8px;
    }

    & + & {
        margin-top: 20px;
    }

    &:hover {
        color: ${primaryColor};
    }
`;

const HamburgerButtonWrap = styled.div`
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const HamburgerButton = styled.button`
    background-color: ${primaryColor};
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 1.4rem;

    & + & {
        margin-left: 5px;
    }
`;
/* 햄버거 메뉴 스타일 끝 */
