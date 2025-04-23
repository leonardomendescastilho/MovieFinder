import { InputProps } from './InputModel';
import { useInputViewModel } from './InputViewModel';

export const InputView = ({
	placeholder,
	align,
	className,
	...props
}: InputProps) => {
	const { inputClassName } = useInputViewModel({ align, className });
	return (
		<input
			autoComplete="off"
			type="text"
			placeholder={placeholder}
			className={inputClassName}
			{...props}
		/>
	);
};
