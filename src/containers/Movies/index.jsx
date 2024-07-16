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
import { getMovies, getTopMovies } from "../../services/getDetails";
import Slider from "../../components/Slider";

function Movies() {
    const [movie, setMovie] = useState();
    const [topMovies, setTopMovies] = useState();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    console.log([movie]);

	useEffect(() => {
		async function getAllMovies() {
			Promise.all([
                getMovies(),
				getTopMovies(),
            ])
            .then(([movie, topMovies]) =>{
                setMovie(movie);
				setTopMovies(topMovies);
            })
            .catch((error) => console.error(error))
		}
        getAllMovies();
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
        </>
    );
}

export default Movies;
