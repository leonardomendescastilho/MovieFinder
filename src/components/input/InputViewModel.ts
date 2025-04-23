import { cva } from 'class-variance-authority';
import { InputViewModelProps, InputViewModelResult } from './InputModel';
import { useMemo } from 'react';
import { cn } from '../../utils/cn';

export const inputVariants = cva(
	'text-sm font-secondary w-full max-w-xl border rounded border-muted-foreground p-2  shadow transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ',
	{
		variants: {
			align: {
				left: 'text-left',
				center: 'text-center',
				right: 'text-right',
			},
		},
		defaultVariants: {
			align: 'left',
		},
	}
);

export const useInputViewModel = ({
	align = 'left',
	className,
}: InputViewModelProps): InputViewModelResult => {
	const inputClassName = useMemo(() => {
		return cn(inputVariants({ align }), className);
	}, [align, className]);

	return {
		inputClassName,
	};
};
