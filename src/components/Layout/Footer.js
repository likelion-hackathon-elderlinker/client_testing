import React from "react";
import styled from "styled-components";
import { media } from "../../styles/mixin";

function Footer() {
    return (
        <FooterWrap>
            Copyright 2023. elderlinker all rights reserved.
        </FooterWrap>
    );
}

export default Footer;

const FooterWrap = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    height: 130px;
    padding: 0 60px;
    background-color: #ededed;
    color: #a3a3a3;
    font-size: 1.4rem;

    ${media.tablet`
    height: 80px;
    padding: 0 30px;
    justify-content: center;
`}

    ${media.mobile`
    height: 50px;
    font-size: 1.2rem;
`}
`;
