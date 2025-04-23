import * as z from 'zod';
import { UseFormRegister, UseFormHandleSubmit } from 'react-hook-form';

export const SearchMovieSchema = z.object({
  name: z.string().min(1, { message: 'O nome é obrigatório' }),
  year: z.string().optional(),
});

export type SearchMovieFormData = z.infer<typeof SearchMovieSchema>;

export interface SearchProps {
	onOpenModal: () => void;
	onSearch: () => void;
	onChange: {
		handleMovieName: (newName: string) => void;
		handleMovieYear: (newYear: string | undefined) => void;
	};
	isLoading?: boolean;
}

export interface SearchViewModelResult {
  register: UseFormRegister<SearchMovieFormData>;
  handleSearchSubmit: (data: SearchMovieFormData) => void;
  handleSubmit: UseFormHandleSubmit<SearchMovieFormData>;
}