import { Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import Movies from "../containers/Movies";
import Series from "../containers/Series";
import TvPrograms from "../containers/Tv-Programs";
import DefaultLayout from "../layout/DefaultLayout";
import Details from "../containers/Details";

function Router() {
	return (
		<Routes>
			<Route element= {<DefaultLayout />} >
				<Route path="/" element={<Home />} />
				<Route path="/Filmes" element={<Movies />} />
				<Route path="/Series" element={<Series />} />
				<Route path="/Tv-Programs" element={<TvPrograms />} />
				<Route path="/Details/:id" element={<Details />} />
			</Route>
		</Routes>
	);
}

export default Router;
