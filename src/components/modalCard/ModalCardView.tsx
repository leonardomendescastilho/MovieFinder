import { ModalCardProps } from './ModalCardModel';
import { CardContainer } from './cardContainer/';

import { CardContent } from './cardContent/';

export const ModalCardView = ({ data }: ModalCardProps) => {
	return (
		<CardContainer>
			<CardContent data={data} />
		</CardContainer>
	);
};
