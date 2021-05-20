module.exports = {
    
    purge: ["./src/**/*.tsx", "./public/index.html"],
    theme: {
        extend:{
            

            boxShadow: {
                around: "0 0 10px #ccc"
            },
            fontFamily: {
                sans: [
                'Inter',
                '-apple-system',
                'BlinkMacSystemFont',
                'Segoe UI',
                'Roboto',
                'Helvetica',
                'Arial',
                'sans-serif',
                ],
            },
            backgroundImage: {
                'svgwave': "url('/svgwave.svg')",
                
            },
                colors: {
                    'button-main':'#2ecc71',
                    'button-hover':'#27ae60',
                    transparent: 'transparent',
                    
                    gray: {
                        100: 'var(--color-gray-100)',
                        200: 'var(--color-gray-200)',
                        300: 'var(--color-gray-300)',
                        400: 'var(--color-gray-400)',
                        500: 'var(--color-gray-500)',
                        600: 'var(--color-gray-600)',
                        700: 'var(--color-gray-700)',
                        800: 'var(--color-gray-800)',
                    },
                    accent: {
                        primary:{
                            DEFAULT: 'var(--color-primary)',
                            darker: 'var(--color-primary-darker)'
                        },
                        secondary:{
                            DEFAULT: 'var(--color-secondary)',
                            darker: 'var(--color-secondary-darker)'
                        },
                        
                        thirdary:{
                            DEFAULT: 'var(--color-thirdary)',
                            darker: 'var(--color-thirdary-darker)'
                        },
                        
                
                    },
            },
            
    }
}
}