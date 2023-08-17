import { css } from "styled-components";

export const sizes = {
    tablet: "1024px",
    mobile: "767px", // 태블릿 사이즈 최소 768px까지
};

export const media = Object.keys(sizes).reduce((acc, label) => {
    acc[label] = (literals, ...placeholders) => css`
        @media (max-width: ${sizes[label]}) {
            ${css(literals, ...placeholders)}
        }
    `;
    return acc;
}, {});
