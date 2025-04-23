import { ButtonProps } from './ButtonModel';
import { useButtonViewModel } from './ButtonViewModel';
import { Loader } from 'lucide-react';

export const ButtonView = ({
	text,
	variant = 'default',
	icon,
	loading = false,
	className,
	...props
}: ButtonProps) => {
	const { buttonIcon, loadingText, buttonClassName } = useButtonViewModel({
		className,
		icon,
		variant,
	});

	return (
		<button
			aria-busy={loading}
			aria-label={props['aria-label'] || text}
			disabled={loading || props.disabled}
			className={buttonClassName}
			{...props}
		>
			{loading ? (
				<>
					{loadingText}
					<Loader
						size={16}
						className="animate-spin"
						aria-hidden="true"
					/>
				</>
			) : (
				<>
					{text}
					{buttonIcon}
				</>
			)}
		</button>
	);
};

