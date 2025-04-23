import { CardFooterProps } from './CardFooterModel';
import { useCardFooterViewModel } from './CardFooterViewModel';
import { Button } from '../../button';

export const CardFooterView = ({
	data,
}: CardFooterProps) => {
	const { handleAddMovieToFavorite } = useCardFooterViewModel({ data });
	return (
		<div className="flex">
			<Button
				onClick={handleAddMovieToFavorite}
				icon={'favorite'}
				text={'Adicionar aos Favoritos'}
			/>
		</div>
	);
};
