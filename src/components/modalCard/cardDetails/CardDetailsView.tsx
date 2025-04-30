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
	// <div className="flex gap-4  flex-col  text-xs md:text-sm font-base font-semibold tracking-tighter justify-between">
	<div className="text-primary font-semibold tracking-tighter text-pretty">
		<div className="flex flex-col mb-2 space-y-0">
			<p className='flex place-items-baseline gap-1 text-sm font-semibold'>
				Director:{''}
				<span className="text-muted-foreground text-wrap text-xs md:text-sm tracking-tighter">{Director}</span>
			</p>
			<p className='flex place-items-baseline gap-1 text-sm font-semibold'>
				Writers:{''}
				<span className="text-muted-foreground text-wrap text-xs md:text-sm tracking-tighter">{Writer}</span>
			</p>
		</div>

		<div className="flex flex-col gap-1">
			<p className="flex items-center gap-1">
				<Clapperboard
					size={16}
				/>
				{Genre.split(',').map((genre, index, array) => {
					return (
						<span key={genre} className='text-wrap text-center font-base text-xs md:text-sm text-muted-foreground tracking-tighter'>
							{genre.trim()}
							{index < array.length - 1 && ', '}
						</span>
					);
				})}
			</p>
			<p className="flex items-center gap-1">
				<Hourglass
					size={16}
				/>
				<span className='text-wrap text-center font-base text-xs md:text-sm text-muted-foreground tracking-tighter'>{Runtime}</span>
			</p>
			<p className="flex items-center gap-1 text-xs md:text-sm font-base font-semibold tracking-tighter">
				<Award
					size={16}
				/>
				<span className='text-wrap text-center font-base text-xs md:text-sm text-muted-foreground tracking-tighter'>{Awards}</span>
			</p>
			<p className="flex items-center gap-1">
				<Calendar
					size={16}
				/>
				<span className='text-wrap text-center font-base text-xs md:text-sm text-muted-foreground tracking-tighter'>{Released}</span>
			</p>

				<p className='flex items-center gap-1 text-xs md:text-sm font-base font-semibold tracking-tighter'>
					<Cast
						size={16}
					/>
				{Actors.split(',').map((actor, index, array) => {
					return (
						<span key={actor} className='text-wrap text-center font-base text-xs md:text-sm text-muted-foreground tracking-tighter'>
							{actor.trim()}
							{index < array.length - 1 && ', '}
						</span>
					);
				})}
				</p>
		</div>
	</div>
);
