/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/flowbite/**/*.js' // Esta línea conecta Flowbite
	],
	theme: {
		extend: {},
	},
	plugins: [
		require('flowbite/plugin') // Esto activa los estilos de Flowbite
	],
}