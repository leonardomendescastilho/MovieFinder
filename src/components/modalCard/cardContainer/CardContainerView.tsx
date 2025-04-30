import { CardContainerProps } from './CardContainerModel';

export const CardContainerView = ({ children }: CardContainerProps) => {
	return (
		<article className="bg-secondary rounded-2xl p-2 hover:ring-2 hover:scale-101 transition-all duration-300 ease-in-out group">
			{children}
		</article>
	);
};
