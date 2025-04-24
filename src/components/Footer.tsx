import { Link } from 'react-router-dom';

export const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t w-full md:pt-2 text-xs md:text-sm shrink-0">
			<div className="container mx-auto flex md:flex-col items-center  justify-center px-4 md:gap-1">
				<p className="md:mb-0">
					<span aria-label="Copyright">&copy;</span> {currentYear} Leonardo
					Mendes de Castilho
				</p>
				<nav aria-label="Links de contato e portfolio">
					<ul className="flex">
						<li>
							<Link
								to="https://portfolio-navy-seven-34.vercel.app/"
								className="text-primary font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-1"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Portfolio - abre em nova janela"
							>
								Portfolio
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</footer>
	);
};
