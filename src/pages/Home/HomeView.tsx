import { Button } from '../../components/button/index.tsx';
import { Modal } from '../../components/Modal';
import { ModalCard } from '../../components/modalCard';
import { SearchView } from '../../components/search/SearchView';
import { useHomeViewModel } from './HomeViewModel.ts';
import { ErrorMessage } from '../../components/error/';
import { Helmet } from 'react-helmet-async';

export const HomeView = () => {
	const {
		handleFavoriteMovieButtonClick,
		handleSearchMovieBottonClick,
		isSearchInputOpen,
		showModal,
		handleCloseModal,
		handleMovieInput,
		handleOpenModal,
		triggerController,
		isLoading,
		movieData,
		error,
	} = useHomeViewModel();

	return (
		<>
			<Helmet>
				<title>MovieFinder | Encontre Filmes Populares</title>
				<meta
					name="description"
					content="Busque filmes, descubra recomendações e salve seus favoritos no MovieFinder. Experimente a magia do cinema agora!"
				/>
				<meta
					property="og:title"
					content="MovieFinder"
				/>
				<meta
					property="og:description"
					content="Busque e favorite filmes incríveis. Ideal para cinéfilos!"
				/>
				<meta
					property="og:type"
					content="website"
				/>
				<meta
					property="og:image"
					content="LINK_DA_IMAGEM"
				/>
				<meta
					property="og:url"
					content="https://seu-link.netlify.app"
				/>
			</Helmet>
			<section
				aria-labelledby="main-heading"
				className="flex flex-col justify-center items-center w-full h-full gap-10"
			>
				<div className="flex flex-col justify-center items-center text-center gap-6 max-w-4xl ">
					<h1
						id="main-heading"
						className="text-3xl sm:text-4xl/12 md:text-5xl/12 font-semibold text-primary max-w-lg md:max-w-4xl tracking-tight font-title"
					>
						Vamos começar a Explorar Filmes Populares!
					</h1>
					<p className="font-base text-base md:text-lg/6 text-secondary-foreground tracking-tighter  max-w-lg md:max-w-xl">
						Juntos, vamos descobrir histórias emocionantes, compartilhar
						recomendações e criar momentos inesquecíveis!
					</p>
				</div>

				<div className="flex gap-6 relative">
					<div
						className="flex gap-6 "
						role="group"
						aria-label="Opções de navegação"
					>
						<Button
							onClick={handleSearchMovieBottonClick}
							text="Buscar Filmes"
							aria-expanded={isSearchInputOpen}
							aria-controls="search-input"
						/>
						<Button
							onClick={handleFavoriteMovieButtonClick}
							variant="secondary"
							text="Favoritos"
						/>
					</div>

					<div
						id="search-input"
						className={`transition-opacity duration-300 absolute top-15 left-0 ${
							isSearchInputOpen
								? 'opacity-100 h-auto'
								: 'opacity-0 h-0 overflow-hidden'
						} flex flex-col gap-5 w-full items-center justify-center`}
						aria-hidden={!isSearchInputOpen}
					>
						<SearchView
							onOpenModal={handleOpenModal}
							isLoading={isLoading}
							onSearch={triggerController}
							onChange={handleMovieInput}
						/>

						{error && (
							<ErrorMessage
								error={error}
								errorMessage={`Erro ao buscar filme: ${error.message}`}
								duration={3000}
							/>
						)}
					</div>
				</div>
			</section>

			{showModal && movieData && (
				<Modal
					onClose={handleCloseModal}
					children={<ModalCard data={movieData} />}
				/>
			)}
		</>
	);
};
