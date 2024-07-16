import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import Slider from "../../components/Slider";
import {
	Background,
	Container,
	ContainerButtons,
	Info,
	Poster,
} from "./styles";
import { useState, useEffect } from "react";
import { getImages } from "../../utils/getImages";
import Modal from "../../components/Modal";
import { getMovies, getPopularSeries, getTopMovies, getTopSeries, getTvToday } from "../../services/getDetails";

function Home() {
    const [showModal, setShowModal] = useState(false);
	const [movie, setMovie] = useState();
	const [topMovies, setTopMovies] = useState();
    const [topSeries, setTopSeries] = useState();
    const [popularSeries, setPopularSeries] = useState();
    const [tvToday, setTvToday] = useState();
	const navigate = useNavigate()
	

	useEffect(() => {
		async function getAllData() {

			Promise.all([
				getMovies(),
				getTopMovies(),
				getTopSeries(),
				getPopularSeries(),
				getTvToday()
			])
			.then(([movie, topMovies, topSeies, popularSeries, tvToday]) => {
				setMovie(movie);
				setTopMovies(topMovies);
				setTopSeries(topSeies);
				setPopularSeries(popularSeries);
				setTvToday(tvToday);
			})
			.catch((error) => console.error(error))
		}

		getAllData();
		
	}, []);

	return (
		<>
			{movie && (
				<Background img={getImages(movie.backdrop_path)}>
                    {showModal && <Modal movieId={ movie.id } setShowModal= {setShowModal} />}
					<Container>
						<Info>
							<h1>{movie.title}</h1>
							<p>{movie.overview}</p>
							<ContainerButtons>
								<Button red={true} onClick={() => navigate(`Details/${movie.id}`)} >Ver Ahora</Button>

								<Button onClick= {() => setShowModal(true)}>Ver el Trailer</Button>
							</ContainerButtons>
						</Info>
						<Poster>
							<img src={getImages(movie.poster_path)} alt="Capa del filme" />
						</Poster>
					</Container>
				</Background>
			)}

			{topMovies && <Slider info={topMovies} title={"Top Movies"} />}
            {topSeries && <Slider info={topSeries} title={"Top Series"} />}
            {popularSeries && <Slider info={popularSeries} title={"Popular Series"} />}
            {tvToday && <Slider info={tvToday} title={"Top Tv Programs Today"} />}
		</>
	);
}

export default Home;
