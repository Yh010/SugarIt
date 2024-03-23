import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // extend: { spacing: {
    //   '3px': '3px',
    // }},
    extend: {
      colors:{
        'gold': '#c59d5f',
        'white':'#ffffff',
        'grey' : '#102a42',
      },
      spacing: {
        '3px': '3px',
      },
      animation: {
        marquee: 'marquee 25s linear infinite',
        marquee2: 'marquee2 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        
      } 
    },
  },
  plugins: [],
});
