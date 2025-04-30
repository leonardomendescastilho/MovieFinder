import { CardHeaderModelProps } from './CardHeaderModel';

export const CardHeaderView = ({
	Plot,
	Title,
}: CardHeaderModelProps) => {
	return (
		<div className="flex flex-col gap-4 mb-6">
			<div className="flex flex-col text-center">
				<h1 className="text-primary font-bold text-balance font-title text-center text-xl md:text-2xl">
					{Title}
				</h1>
			</div>
			<p className="text-wrap text-center font-base text-sm md:text-base/5 text-muted-foreground tracking-tighter">
				{Plot}
			</p>
		</div>
	);
};
