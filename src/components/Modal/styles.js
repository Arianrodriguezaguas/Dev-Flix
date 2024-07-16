import styled from "styled-components";

 export const Container = styled.div`
    background-color: #000;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    padding: 50px;
    max-width: 1000px;

    iframe{
        border: none;
    }
`
export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonModal = styled.button`
    color: #fff;
    font-size: 20px;
    background-color: red;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    border: none;
    padding: 2px;
    font-weight: 600;

    &:hover{
        opacity: 0.8;
        padding: 2.5px;
        transition:  linear 0.5s ease-in-out;
        
    }
`





