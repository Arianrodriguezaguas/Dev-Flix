import styled, {css} from "styled-components";

const buttonStyle = css`
    border: 3PX solid #fff;
    background-color: transparent;
    color: #fff;
    border-radius: 30px;
    padding: 10px 20px;
    cursor: pointer;
    font-weight: 600;
    font-size: 1rem;
    z-index: 2;

    &:hover {
        background-color: #fff;
        color: #ff0000;
    }

    
`

export const ButtonWhite = styled.button`
    ${buttonStyle}
`

export const ButtonRed = styled.button`
    ${buttonStyle}
    background-color: #ff0000;
    border: 4px solid transparent;
    color: #fff;
    box-shadow: 0px 0px 7px 8px rgb(255 0 0 / 30%);

    &&:hover {
        box-shadow: 0px 0px 7px 15px rgb(255 0 0 / 30%);
        background-color: #ff0000;
        color: #fff;
    }
`