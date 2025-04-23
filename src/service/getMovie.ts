import { axiosInstance } from './client';
import { MovieDataRequest, MovieDataResponse } from './type';

export const getMovie = async ({ movieName, movieYear }: MovieDataRequest) => {
	try {
		const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

		const params = new URLSearchParams({
			t: movieName,
			...(movieYear && { y: movieYear }),
			apikey: API_KEY,
		});

		const { data } = await axiosInstance.get<MovieDataResponse>(
			`https://www.omdbapi.com/?${params.toString()}`
		);

		if (data.Response === 'False') {
			throw new Error(data.Error || 'Filme não encontrado');
		}

		return data;
	} catch (error) {
		console.error('Erro ao buscar filme:', error);
		throw error;
	}
};
