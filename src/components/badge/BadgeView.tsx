import { BadgeProps } from "./BadgeModel"
import { useBadgeViewModel } from "./BadgeViewModel";

export const BadgeView = ({
	text,
	variant = 'default',
	className,
	...props
}: BadgeProps) => {
	const { badgeClassName } = useBadgeViewModel({
		variant,
		className,
	});

	return (
		<span role="badge" className={badgeClassName} {...props}>
			{text}
		</span>
	)
}
