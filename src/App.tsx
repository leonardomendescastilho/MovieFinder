import { QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from './route/RouterProvider';
import { queryClient } from './service/queryClient';
import { FavoritesContextProvider } from './context/FavoritesContextProvider';
import { Toaster } from 'sonner';

export const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<FavoritesContextProvider>
				<Toaster
					// richColors
					duration={1000}
					position="top-center"
				/>
				<RouterProvider />
			</FavoritesContextProvider>
		</QueryClientProvider>
	);
};
