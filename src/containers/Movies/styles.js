
import styled, {keyframes} from "styled-components";

const scale = keyframes`
    from {
        transform: scale(0)
    }
    to{
        transform: scale(1)
    }
`

export const Background = styled.div`
    background-image: url(${props => props.img });
    height: 100vh;
    background-position:center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
    }

    &::after{
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 5rem;
        background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0));
    }
`

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width:1500px;
    z-index: 2;
`

export const Info = styled.div`

    z-index:2;
    padding: 20px;
    width: 50%;

    h1{
        font-size: 3rem;
        color: #fff;
        font-weight: 700;
    }

    p{
        font-size: 1rem;
        color: #fff;
        font-weight: 500;
        margin-top: 20px;
        margin-bottom: 20px;

    }
`

export const Poster = styled.div`

    z-index: 4;

    img{
        width: 250px;
        max-width: 400px;
        border-radius: 30px;
        animation: ${scale} 0.5s linear;
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    gap: 10%;
    margin-top: 10%;
`







