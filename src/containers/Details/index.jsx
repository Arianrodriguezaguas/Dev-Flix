import { useEffect, useState } from "react";
import { Background, Container, Cover, Info } from "./styles";
import {
	getMovieById,
	getMovieCredits,
	getMovieSimilar,
	getMovieVideos,
} from "../../services/getDetails";
import { useParams } from "react-router-dom";
import { getImages } from "../../utils/getImages";
import SpanGenres from "../../components/SpanGenres";
import Credits from "../../components/Credits";
import { ContainerMovies } from "../../components/Credits/styles";
import Slider  from "../../components/Slider"

function Details() {
	const { id } = useParams();
	const [movie, setMovie] = useState();
	const [movieVideos, setMovieVideos] = useState();
	const [movieCredits, setMovieCredits] = useState();
	const [movieSimilar, setMovieSimilar] = useState();

	useEffect(() => {
		async function getAllData() {
			Promise.all([
				getMovieById(id),
				getMovieVideos(id),
				getMovieCredits(id),
				getMovieSimilar(id),
			])
				.then(([movieID, movieVideos, movieCredits, movieSimilar]) => {
					setMovie(movieID);
					setMovieVideos(movieVideos);
					setMovieCredits(movieCredits);
					setMovieSimilar(movieSimilar);
				})
				.catch((error) => console.error(error));
		}

		getAllData();
	}, []);

	return (
		<>
			{movie && (
				<>
					<Background image={getImages(movie.backdrop_path)} />
					<Container>
						<Cover>
							{/* biome-ignore lint/a11y/useAltText: <explanation> */}
							<img src={getImages(movie.poster_path)} />
						</Cover>
						<Info>
							<h2>{movie.title}</h2>
							<SpanGenres genres={movie.genres} />
							<p>{movie.overview}</p>
							<Credits credits={movieCredits} />
						</Info>
					</Container>
					<ContainerMovies>
						{/* biome-ignore lint/complexity/useOptionalChain: <explanation> */}
						{movieVideos &&
							movieVideos.slice(0, 3).map((video) => (
								<div key={video.id}>
									<h4>{video.name}</h4>
									<iframe
										width="100%"
										height="500px"
										src={`https://www.youtube.com/embed/${video.key}`}
										allowFullScreen
										title={video.name}
									>

                                    </iframe>
								</div>
							))}
					</ContainerMovies>
                    {movieSimilar && <Slider info={movieSimilar} title={"Movie Similar"} />}
				</>
			)}
		</>
	);
}

export default Details;
