import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { tertiaryColor } from "../../styles/colors";
import { media } from "../../styles/mixin";

import { FaMinus, FaPlus } from "react-icons/fa";

function FloatingButton() {
    const initialFontSize =
        parseFloat(localStorage.getItem("fontSize")) || 62.5;
    const [fontSize, setFontSize] = useState(initialFontSize);

    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}%`;
        localStorage.setItem("fontSize", fontSize);
    }, [fontSize]);

    return (
        <ButtonWrap>
            <Button
                onClick={() => {
                    if (fontSize < 90) {
                        setFontSize((prevSize) => prevSize + 10);
                    }
                }}
            >
                <FaPlus />
                <ButtonText>글씨 크게</ButtonText>
            </Button>
            <Button
                onClick={() => {
                    if (fontSize > 60) {
                        setFontSize((prevSize) => prevSize - 10);
                    }
                }}
            >
                <FaMinus />
                <ButtonText>글씨 작게</ButtonText>
            </Button>
        </ButtonWrap>
    );
}

export default FloatingButton;

const ButtonWrap = styled.div`
    position: fixed;
    bottom: 100px;
    right: 40px;
    z-index: 1;

    ${media.tablet`
        display: none;
    `}
`;

const Button = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100px;
    height: 100px;
    background-color: ${tertiaryColor};
    border-radius: 50%;
    text-align: center;
    color: #fff;
    cursor: pointer;

    & + & {
        margin-top: 10px;
    }
`;

const ButtonText = styled.p`
    margin-top: 10px;
`;
