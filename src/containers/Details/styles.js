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
    background-image: url(${props => props.image});
    background-position: center;
    background-size: cover;
    height: 50vh;
    background-repeat: no-repeat;
    position: relative;

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
    }

    &::after{
        content: '';
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
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    max-width: 1000px;
    margin-top: -5rem;
`

export const Cover = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    img{
        width: 250px;
        border-radius: 30px;
        z-index: 2;
        box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
        animation: ${scale} 0.5s linear;
    }
`

export const Info = styled.div`
    padding: 20px;
    width: 50%;
    z-index: 2;
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    h2{
        font-size: 3rem;
        font-weight: 500;
        color: #fff;
    }

    p{
        font-size: 1rem;
        color: #fff;
        font-weight: 500;
        margin-top: 20px;
        margin-bottom: 20px;

    }
`

