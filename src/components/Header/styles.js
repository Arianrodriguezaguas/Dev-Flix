import styled from "styled-components";


export const Container = styled.div`
min-height: 4rem;
z-index: 99;
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1% 5%;
background-color: ${props => props.changeBackground ? "rgba(0, 0, 0, 0.9)" : "transparent"};
transition: background-color 0.5s ease-in-out;

img{
    width: 20%;
}
    
`

export const Menu = styled.ul`
    display: flex;
    list-style: none;
    gap: 2rem;
`

export const Li = styled.li`
    font-weight: 500;
    cursor: pointer;
    position: relative;

    a{
        text-decoration: none;
        color: #FFFFFF;
    }

    &::after{
        content: " ";
        height: 0.1rem;
        width: ${ (props) => (props.isActive ? "100%" : 0)};
        background-color: #189b20;
        position: absolute;
        bottom: -15%;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.5s ease-in-out;
    }

    &:hover::after{
        width: 100%;
    }
`



