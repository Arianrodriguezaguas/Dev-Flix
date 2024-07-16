import styled from "styled-components";



export const Container = styled.div`
    display: flex;
    margin-top: 20px;
    gap: 1%;

    div{
        display: flex;
        flex-direction: column;
    }

    p{
        color: #fff;

    }

    img{
        height:8rem;
    }
`

export const Title = styled.h4`
    color: #fff;
    font-size: 2rem;
    font-weight: 500;
`

export const ContainerMovies = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    width: 100%;

    div{
        display: flex;
        flex-direction: column;
        max-width: 1000px;
        width: 100%;
        height: 100%;
        margin: 1rem 0;
    }

    iframe{
        border: none;
        
    }

    h4{
        color: #fff;
        font-size: 2rem;
        font-weight: 500;
    }
`

