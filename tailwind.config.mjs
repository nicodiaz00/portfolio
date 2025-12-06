module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
        './node_modules/flowbite/**/*.js' // Línea de Flowbite
    ],
    theme: {
        extend: {
            // ==================================================
            // 🛑  AQUÍ ESTABA EL ERROR: fontFamily y colors deben estar al mismo nivel
            // ==================================================

            fontFamily: {
                // Configuración de fuentes (solo 'orbitron')
                orbitron: ['Orbitron', 'sans-serif'],
            },
            
            // Colores: ¡Ahora sí están en el lugar correcto!
            colors: { 
                // Color más oscuro para fondo principal
                'dark-navy': '#0B2B40', 
                
                // Color azul primario para elementos principales o botones
                'primary-blue': '#164773',
                
                // Color turquesa/teal para acentos y resaltos
                'accent-teal': '#1E5959',
            },
            // ==================================================
        },
    },
    plugins: [
        require('flowbite/plugin') // require() es CommonJS
    ],
}