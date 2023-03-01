/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		screens: {
			sm: '400px',
			md: '550px',
			lg: '768px',
			xl: '1024px',
			'2xl': '1280px',
			'3xl': '1536px',
		},
		extend: {
			colors: {
				darkgray: '#1F1F27',
				medgray: '#403F50',
				lightgray: '#746B7B',
				cream: '#E8E1D0',
				offwhite: '#F1E8E8',
				statusred: '#D9534F',
				statusorange: '#F0AD4E',
				statusgreen: '#5CB85C',
				statusblue: '#5BC0DE',
				statusgray: '#6F737C',
			},
		},
	},
	plugins: [],
};
