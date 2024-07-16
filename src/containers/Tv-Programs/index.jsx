import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Background,
	Container,
	ContainerButtons,
	Info,
	Poster, } from "./styles";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import { getImages } from "../../utils/getImages";
import { getTvToday } from "../../services/getDetails";
import Slider from "../../components/Slider";

function Tv() {


    const [tvToday, setTvToday] = useState();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);


	useEffect(() => {
		async function getTv() {
			Promise.all([
                
				getTvToday(),
            ])
            .then(([tvToday]) =>{
				setTvToday(tvToday);
                
            })
            .catch((error) => console.error(error))
		}
        getTv();
	}, []);

    return (
        <>
            {tvToday && (
				<Background img={getImages(tvToday[0].backdrop_path)}>
                    {showModal && <Modal movieId={ tvToday[0].id } setShowModal= {setShowModal} />}
					<Container>
						<Info>
							<h1>{tvToday[0].title}</h1>
							<p>{tvToday[0].overview}</p>
							<ContainerButtons>
								<Button red={true} onClick={() => navigate(`Details/${tvToday.id}`)} >Ver Ahora</Button>

								<Button onClick= {() => setShowModal(true)}>Ver el Trailer</Button>
							</ContainerButtons>
						</Info>
						<Poster>
							<img src={getImages(tvToday[0].poster_path)} alt="Capa del filme" />
						</Poster>
					</Container>
				</Background>
			)}
            {tvToday && <Slider info={tvToday} title={"Tv Programs Today"} />}
            
        </>
    );
}

export default Tv;
