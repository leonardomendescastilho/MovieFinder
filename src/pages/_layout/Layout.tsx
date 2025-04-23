import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const Layout = () => {
	return (
		<div className="flex flex-col h-screen mx-2">
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
			>
				Pular para o conteúdo principal
			</a>
			<Header />
			<main
				id="main-content"
				tabIndex={-1}
				className="flex-1 w-full max-w-7xl mx-auto"
			>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
