import { type VariantProps } from 'class-variance-authority';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { buttonVariants } from './ButtonViewModel';

type ButtonVariantProps = VariantProps<typeof buttonVariants>;
export type ButtonIcon = ButtonIconType | null;
export type ButtonVariant = 'default' | 'secondary' | 'search';

export type ButtonIconType = 'search' | 'favorite';

export interface ButtonViewModelProps extends ButtonVariantProps {
  className?: string;
  variant?: ButtonVariant;
  icon?: ButtonIcon;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
  variant?: ButtonVariant;
	icon?: ButtonIcon;
	loading?: boolean;
}

export interface ButtonViewModelResult {
	buttonIcon: ReactNode | null;
	loadingText: string | null;
	buttonClassName: string;
}
