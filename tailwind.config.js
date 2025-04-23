/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	theme: {
		extend: {
			fontFamily: {
				'roboto-condensed': ['Roboto Condensed', 'sans-serif'],
				'dm-serif-display': ['DM Serif Display', 'serif'],
				inter: ['Inter', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
