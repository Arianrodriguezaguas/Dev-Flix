import { getImages } from "../../utils/getImages"
import { Container } from "./styles"

function Card({ item }){
    
    
    return (
        <Container>
            {/* biome-ignore lint/a11y/useAltText: <explanation> */}
            <img src={getImages(item.poster_path || item.profile_path || " ")} />
            <h3>{item.title || item.name || " "}</h3>
        </Container>
    )  
}

export default Card