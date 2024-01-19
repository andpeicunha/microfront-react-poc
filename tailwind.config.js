/** @type {import('tailwindcss').Config} */
module.exports = {
	// purge: ['./dist/*.html'],
	purge: ['./*.html', './src/**/*.js'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
