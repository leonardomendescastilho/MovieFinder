import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
	children: React.ReactNode;
	onClose: () => void;
}

export const Modal = ({ children, onClose }: ModalProps) => {
	useEffect(() => {
		document.body.classList.add('overflow-hidden');

		return () => {
			document.body.classList.remove('overflow-hidden');
		};
	}, []);

	return ReactDOM.createPortal(
		<div
			onClick={onClose}
			className="fixed inset-0 bg-black/80 z-10"
		>
			<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
				{children}
			</div>
		</div>,
		document.querySelector('.modal-container')!
	);
};
