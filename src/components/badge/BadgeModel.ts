import { HTMLAttributes } from "react";

export type BadgeVariant = 'default' | 'small' | 'info'

export interface BadgeViewModelProps {
	variant?: BadgeVariant;
	className?: string;
}

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement>, BadgeViewModelProps {
	text: string;
}

export interface BadgeViewModelResult {
	badgeClassName: string;
}

