import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			staleTime: 300000, // 5 minutos
			cacheTime: 600000, // 10 minutos
		},
	},
});
