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
import { getPopularSeries, getTopSeries } from "../../services/getDetails";
import Slider from "../../components/Slider";

function Series() {

    const [popularSeries, setPopularSeries] = useState();
    const [Series, setSeries] = useState();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);


	useEffect(() => {
		async function getAllSeries() {
			Promise.all([
                getTopSeries(),
				
                getPopularSeries(),

            ])
            .then(([Series, popularSeries]) =>{
				setSeries(Series);
                setPopularSeries(popularSeries)
            })
            .catch((error) => console.error(error))
		}
        getAllSeries();
	}, []);

    return (
        <>
            {Series && (
				<Background img={getImages(Series[0].backdrop_path)}>
                    {showModal && <Modal movieId={ Series.id } setShowModal= {setShowModal} />}
					<Container>
						<Info>
							<h1>{Series[0].title}</h1>
							<p>{Series[0].overview}</p>
							<ContainerButtons>
								<Button red={true} onClick={() => navigate(`Details/${Series.id}`)} >Ver Ahora</Button>

								<Button onClick= {() => setShowModal(true)}>Ver el Trailer</Button>
							</ContainerButtons>
						</Info>
						<Poster>
							<img src={getImages(Series[0].poster_path)} alt="Capa del filme" />
						</Poster>
					</Container>
				</Background>
			)}
            {Series && <Slider info={Series} title={"Series"} />}
            {popularSeries && <Slider info={popularSeries} title={"Popular Series"} />}
        </>
    );
}

export default Series;
