import { Input } from '../input/';

import { handleYearInputChange } from '../../utils/sanitizeInputYear';
import { useSearchViewModel } from './SearchViewModel';
import { SearchProps } from './SearchModel';
import { Button } from '../button/';

export const SearchView = ({
	onChange,
	onSearch,
	isLoading,
	onOpenModal,
}: SearchProps) => {
	const { handleSearchSubmit, register, handleSubmit } = useSearchViewModel({
		onSearch,
		onChange,
		onOpenModal,
	});
	return (
		<form
			onSubmit={handleSubmit(handleSearchSubmit)}
			className="flex flex-col md:flex-row gap-5 md:gap-0 w-sm sm:w-xl max-w-4xl  justify-center items-center "
			aria-label="Formulário de busca de filmes"
			aria-busy={isLoading}
		>
			<div className="flex flex-col md:flex-row w-full items-center gap-2 ">
				<div className="w-[80%] md:w-[70%]">
				<label htmlFor="movie-name" className="sr-only">Nome do filme</label>
					<Input
					  id="movie-name"
						{...register('name', { required: true })}
						placeholder={'Digite o nome do filme'}
						required
						align="center"
					/>
				</div>
				<div className="w-[30%] md:w-[100px]">
					<label htmlFor="movie-year" className="sr-only">Ano (Opcional)</label>
					<Input
						id="movie-year"
						{...register('year', {
							onChange: handleYearInputChange,
						})}
						placeholder={'Ano (Opcional)'}
						align="center"
					/>
				</div>
			</div>

			<Button
        disabled={isLoading}
        text={isLoading ? "Pesquisando..." : "Pesquisar"}
        variant="search"
        icon="search"
        type="submit"
        aria-busy={isLoading}
      />
		</form>
	);
};
