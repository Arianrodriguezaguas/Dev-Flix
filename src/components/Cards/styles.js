import styled, {css} from "styled-components";



export const Container = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    

    img{
        border-radius: 30px;
        width: 250px;
        height: 100%;

        &:hover {
      transform: scale(1.1); 
    }
    }

    h3{
        color: #fff;
        font-weight: 500;
        margin-top: 10%;
        font-size: 1rem;
    }
`
    