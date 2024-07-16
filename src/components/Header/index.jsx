import { useState } from "react";
import Logo from "../../assets/logo.png";
import { Container, Menu, Li } from "./styles";
import { Link, useLocation } from "react-router-dom";

function Header() {
    const [changeBackground, SetChangeBackground] = useState(false)
    const { pathname } = useLocation()

    window.onscroll = ()=> {
        if (!changeBackground && window.pageYOffset > 100) {
            SetChangeBackground(true);
        }
        if (changeBackground && window.pageYOffset < 100){
            SetChangeBackground(false)
        }
    }

	return (
		<Container changeBackground={changeBackground}>
		
				<img src={Logo} alt="Logo" />
			
			<Menu>
				<Li isActive={pathname === "/"}>
					<Link to="/">Home</Link>
				</Li>
				<Li isActive={pathname.includes("filmes")}>
					<Link to= "/filmes">Filmes</Link>
				</Li>
				<Li isActive={pathname.includes("series")}>
					<Link to= "/series">Series</Link>
				</Li>
                <Li isActive={pathname.includes("tv-programs")}>
                    <Link to= "/tv-programs">Tv-Programs</Link>
                </Li>
			</Menu>
		</Container>
	);
}

export default Header;
