import { CardContainerProps } from './CardContainerModel';

export const CardContainerView = ({ children }: CardContainerProps) => {
	return (
		<article className="h-[75dvh] sm:h-[70dvh] md:h-[78dvh] w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] bg-secondary rounded-2xl inset-shadow-2xl border border-card-foreground">
			{children}
		</article>
	);
};
