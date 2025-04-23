import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { SearchMovieSchema, SearchMovieFormData, SearchProps, SearchViewModelResult } from './SearchModel';

export const useSearchViewModel = ({
	onChange,
	onSearch,
	onOpenModal,
}: SearchProps): SearchViewModelResult => {
	const { handleMovieName, handleMovieYear } = onChange;

	const { register, handleSubmit, reset } = useForm<SearchMovieFormData>({
		resolver: zodResolver(SearchMovieSchema),
		defaultValues: {
			name: '',
			year: '',
		},
	});

	const handleSearchSubmit = (data: SearchMovieFormData) => {
		const { name, year } = data;
		handleMovieName(name);
		handleMovieYear(year);
		onSearch();
		onOpenModal();
		reset();
	};


	return {
		register,
		handleSearchSubmit,
		handleSubmit,
	};
};
