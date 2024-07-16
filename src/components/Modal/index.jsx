import { useState, useEffect } from "react";
import { Background, Container, ButtonModal } from "./styles";
import { getMovieVideos } from "../../services/getDetails";



function Modal({ movieId, setShowModal }) {
	const [movie, setMovie] = useState();

	useEffect(() => {
		async function getMovies() {
			
			setMovie(await getMovieVideos(movieId))
		
		}
		getMovies();
		
	}, [movieId]);

	return (
		<Background onClick={() => setShowModal(false)}>
			{movie && (
				<Container>
					<ButtonModal onClick={() => setShowModal(false)}>X</ButtonModal>
					<iframe
						width="100%"
						height="500px"
						src={`https://www.youtube.com/embed/${movie[0].key}`}
						allowFullScreen
						title={movie.name}
					>
                        
                    </iframe>
				</Container>
			)}
		</Background>
	);
}

export default Modal;


