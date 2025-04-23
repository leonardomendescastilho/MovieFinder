import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMovie } from '../../service/getMovie';

export const useHomeViewModel = () => {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const [isSearchInputOpen, setIsSearchInputOpen] = useState(false);
	const [showModal, setShowModal] = useState<boolean>(false);
	const [movieName, setMovieName] = useState<string>('');
	const [movieYear, setMovieYear] = useState<string>('');
	const [controller, setController] = useState<number | null>(null);

	const queryConfig = useMemo(
		() => ({
			queryKey: ['movie', movieName, movieYear] as const,
			queryFn: () => getMovie({ movieName, movieYear: movieYear || undefined }),
		}),
		[movieName, movieYear]
	);

	const { data, isLoading, error } = useQuery({
		...queryConfig,
		enabled: false,
		retry: 2,
	});

	useEffect(() => {
		if (controller !== null) {
			queryClient.fetchQuery(queryConfig);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [controller, queryClient]);

	const handleMovieName = (newName: string) => {
		setMovieName(newName.trim());
	};

	const handleMovieYear = (newYear: string | undefined) => {
		setMovieYear(newYear?.trim() || '');
	};

	const handleSearchMovieBottonClick = () => {
		setIsSearchInputOpen(!isSearchInputOpen);
	};

	const handleFavoriteMovieButtonClick = () => {
		navigate('/favorite');
	};

	const handleOpenModal = () => {
		setShowModal(true);
	};

	const handleCloseModal = () => {
		setShowModal(false);
	};

	const triggerController = () => {
		setController((prev) => (prev === null ? 1 : prev + 1));
	};

	const handleMovieInput = {
		handleMovieName,
		handleMovieYear,
	};

	return {
		isSearchInputOpen,
		handleSearchMovieBottonClick,
		handleFavoriteMovieButtonClick,
		handleOpenModal,
		showModal,
		handleCloseModal,
		handleMovieInput,
		movieData: data,
		isLoading,
		error,
		triggerController,
	};
};
