import { cva } from 'class-variance-authority';
import { ButtonViewModelProps, ButtonViewModelResult } from './ButtonModel';
import { Heart, Search } from 'lucide-react';
import { useMemo } from 'react';
import { cn } from '../../utils/cn';

export const buttonVariants = cva(
	'cursor-pointer font-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 text-sm md:text-base py-2 px-5 border rounded transition-colors duration-200 ease-in-out flex items-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed focus:ring-primary',
	{
		variants: {
			variant: {
				default:
					'text-foreground border-muted-foreground hover:border-ring hover:text-primary-foreground hover:bg-primary',
				secondary:
					'border-ring bg-primary text-primary-foreground hover:border-chart-3 hover:bg-chart-3 focus:ring-chart-3',
				search:
					'text-foreground border-muted-foreground hover:border-chart-2 hover:text-primary-foreground hover:bg-chart-2 px-4 md:px-5 focus:ring-chart-2',
			},
		},
		defaultVariants: { variant: 'default' },
	}
);

export const useButtonViewModel = ({
	className,
	icon,
	variant = 'default',
}: ButtonViewModelProps): ButtonViewModelResult => {
	const buttonClassName = useMemo(
		() => cn(buttonVariants({ variant }), className),
		[variant, className]
	);

	const buttonIcon = useMemo(() => {
		switch (icon) {
			case 'search':
				return (
					<Search
						size={16}
						aria-hidden="true"
					/>
				);
			case 'favorite':
				return (
					<Heart
						size={16}
						aria-hidden="true"
					/>
				);
			default:
				return null;
		}
	}, [icon]);

	const loadingText = useMemo(() => {
		switch (variant) {
			case 'search':
				return 'Pesquisando...';
			default:
				return 'Carregando...';
		}
	}, [variant]);

	return { buttonIcon, loadingText, buttonClassName };
};
