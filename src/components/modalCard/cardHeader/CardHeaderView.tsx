import { CardHeaderModelProps } from './CardHeaderModel';

export const CardHeaderView = ({
	Plot,
	Title,
}: CardHeaderModelProps) => {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex flex-col text-center">
				<h1 className="text-primary text-balance font-title text-center text-xl md:text-2xl">
					{Title}
				</h1>
			</div>
			<p className="text-wrap text-center font-base font-normal  text-sm md:text-base/6 text-muted-foreground tracking-tighter max-w-xl">
				{Plot}
			</p>
		</div>
	);
};
