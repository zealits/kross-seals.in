/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors: {
        'deep-blue': '#003366',
        'steel-gray': '#4B4B4B',
        'slate-gray': '#6C757D',
        'silver': '#C0C0C0',
        'crimson': '#DC143C',
        'dark-crimson': '#B22222',
        'navy-blue': '#003366',
        'cool-gray': '#6C757D',
        'teal': '#008080',
        'light-gray': '#F8F9FA',
        'dark-slate-blue': '#483D8B',
        'charcoal-gray': '#333333',
        'slate-gray': '#6C757D',
        'warm-gray': '#D3D3D3',
        'light-beige': '#F5F5F5',
        'dark-gray': '#A9A9A9',
        'primary': '#003366',
        'primary-dark': '#002244',
        'light-gray': '#F5F5F5',
      },
      scrollbar: {
        hide: 'scrollbar-hidden'
      },
      
    },
  },
  
  
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.scrollbar-hide::-webkit-scrollbar': {
          display: 'none', /* Chrome, Safari, and Opera */
        },
      }, ['responsive', 'hover']);
    },
    require('tailwind-scrollbar')
    
  ],
}
