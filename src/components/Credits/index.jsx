import { getImages } from "../../utils/getImages"
import {Title, Container} from "./styles"

function Credits({ credits }){

    
    return (
        <>
            <Title>
                Credits
            </Title>
            {credits && (
            <Container>
                {credits.slice(0, 5).map(artist => (
                    <div key={artist.id}>
                        {/* biome-ignore lint/a11y/useAltText: <explanation> */}
                        <img src={getImages(artist.profile_path)}/>
                        <p>{artist.name}</p>
                    </div>
                ))}
                <div>

                </div>
            </Container>
            )}
        </>
    )  
}

export default Credits