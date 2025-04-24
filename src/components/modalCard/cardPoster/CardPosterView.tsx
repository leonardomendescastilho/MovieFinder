import { CardPosterProps } from './CardPosterModel';

export const CardPosterView = ({ Poster, Title }: CardPosterProps) => {
	return (
		<div className="rounded transition-transform duration-300 group-hover:scale-[1.02] relative w-[36%] md:w-[55%] sm:w-[50%]">
			<img
				className="relative -mt-21 sm:block sm:-mt-25 w-full overflow-hidden  ease-in-out shadow-lg rounded-2xl object-cover transition-transform duration-500
        group-hover:scale-105"
				src={Poster}
				alt={`Image of ${Title}`}
			/>
		</div>
	);
};
