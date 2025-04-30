import { CardPosterProps } from './CardPosterModel';

export const CardPosterView = ({ Poster, Title }: CardPosterProps) => {
	return (
		<div className="flex rounded-2xl overflow-hidden h-50 sm:h-auto w-[130px] md:w-[150px] lg:w-[200px] relative -mt-10 md:-mt-20 lg:-mt-25 ">
			<img
				className="object-cover"
				src={Poster}
				alt={`Image of ${Title}`}
			/>
		</div>
	);
};
