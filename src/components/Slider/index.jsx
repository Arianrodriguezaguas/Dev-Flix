
import Card from "../Cards";
import { Container } from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";

function Slider({ info, title }) {
    
	return (
		<Container>
			<h2>{title}</h2>
			<Swiper
                grabCursor 
                spaceBetween={20}
                slidesPerView={"auto"}
                className="swiper"
                >
                {info.map( (item, index) => (
                    // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
                    <SwiperSlide key={index}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}
				
			</Swiper>
		</Container>
	);
}

export default Slider;
