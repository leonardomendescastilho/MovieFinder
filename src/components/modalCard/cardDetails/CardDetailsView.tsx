import { Award, Calendar, Cast, Clapperboard, Hourglass } from 'lucide-react';
import { CardDetailsProps } from './CardDetailsModel';

export const CardDetailsView = ({
	Awards,
	Director,
	Genre,
	Released,
	Runtime,
	Writer,
	Actors,
}: CardDetailsProps) => (
	<div className="flex gap-4  flex-col  text-xs md:text-sm font-base font-semibold tracking-tighter justify-between">
		<div className="flex flex-col gap-1">
			<p className="flex gap-1 text-primary">
				Director:
				<span className="text-secondary-foreground text-wrap">{Director}</span>
			</p>
			<p className="flex gap-1 text-primary">
				Writers:
				<span className="text-secondary-foreground text-wrap">{Writer}</span>
			</p>
		</div>

		<div className="flex flex-col gap-1">
			<p className="flex items-center gap-1">
				<Clapperboard
					className="text-primary"
					size={15}
				/>
				{Genre.split(',').map((genre, index, array) => {
					return (
						<span key={genre}>
							{genre.trim()}
							{index < array.length - 1 && ', '}
						</span>
					);
				})}
			</p>
			<p className="flex items-center gap-1">
				<Hourglass
					className="text-primary"
					size={15}
				/>
				<span>{Runtime}</span>
			</p>
			<p className="flex items-center gap-1 text-xs md:text-sm font-base font-semibold tracking-tighter ">
				<Award
					className="text-primary"
					size={15}
				/>
				<span>{Awards}</span>
			</p>
			<p className="flex items-center gap-1">
				<Calendar
					className="text-primary"
					size={15}
				/>
				<span>{Released}</span>
			</p>

			<div className="flex gap-1 items-center">
				<p>
					<Cast
						className="text-primary"
						size={15}
					/>
				</p>
				{Actors.split(',').map((actor, index, array) => {
					return (
						<span key={actor}>
							{actor.trim()}
							{index < array.length - 1 && ', '}
						</span>
					);
				})}
			</div>
		</div>
	</div>
);
