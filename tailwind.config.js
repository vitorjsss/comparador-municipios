/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#E6F4EC',
                    100: '#CDE9D8',
                    200: '#9BD4B2',
                    300: '#69BE8B',
                    400: '#3FA86A',
                    500: '#1B7F4B', // Verde principal
                    600: '#166A3F',
                    700: '#115532',
                    800: '#0C3F26',
                    900: '#07291A',
                    950: '#04160F',
                },
                accent: {
                    50: '#FFF9E6',
                    100: '#FFF2CC',
                    200: '#FFE699',
                    300: '#FFD966',
                    400: '#FFCC33',
                    500: '#FFB800', // Amarelo principal
                    600: '#E6A600',
                    700: '#B38200',
                    800: '#805C00',
                    900: '#4D3700',
                    950: '#332400',
                },
                background: {
                    light: '#F7FDF9',
                    dark: '#0C3F26',
                }
            },
        },
    },
    plugins: [],
};
