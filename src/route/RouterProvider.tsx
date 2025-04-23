import { Routes, Route } from 'react-router-dom';
import { Layout } from '../pages/_layout/Layout';
import { Home } from '../pages/Home/';
import { FavoriteView } from '../pages/Favorite/FavoriteView';

export const RouterProvider = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<Layout />}
			>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path="favorite"
					element={<FavoriteView />}
				/>
			</Route>
		</Routes>
	);
};
