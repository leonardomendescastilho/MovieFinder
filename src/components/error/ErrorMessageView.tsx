import { ErrorMessageProps } from './ErrorMessageModel';
import { CircleAlert } from 'lucide-react';
import { useErrorMessageModel } from './ErrorMessageViewModel';

export const ErrorMessageView = ({
	error,
	errorMessage,
	duration,
}: ErrorMessageProps) => {
	const { showError } = useErrorMessageModel({ error, duration });

	if (showError) {
		return (
			<div
				role="alert"
				aria-live="assertive"
				className="absolute top-35 md:top-10 md:left-1/2 md:-translate-x-1/2 text-xs sm:text-sm md:text-base text-primary font-semibold flex gap-2 items-center p-2 border-b mt-5 w-65 sm:w-72 md:w-80 text-center"
			>
				<CircleAlert
					size={16}
					aria-hidden="true"
				/>
				<span>{errorMessage}</span>
			</div>
		);
	}
};
