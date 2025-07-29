    // tailwind.config.ts
    import type { Config } from 'tailwindcss';

    const config: Config = {
      content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}', // Adjust paths to your files
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
            "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
        // Add other paths where you use Tailwind classes
      ], darkMode: "class",
      theme: {
       
        extend: {
          // Extend Tailwind's default theme here
          colors: {
            'custom-blue': '#1DA1F2',
          },
          fontFamily: {
            sans: ['Inter', 'sans-serif'],
          },
        },
      },
      plugins: [
        require('flowbite/plugin')
        // Add Tailwind plugins here
        // require('@tailwindcss/typography'),
      ],
    };

    export default config;