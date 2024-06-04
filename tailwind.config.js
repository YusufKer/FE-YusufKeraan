/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      sans:["Neue Plak Regular", "sans-serif"]
    },
    extend: {
      space:{
        'dt':'60px',
        'mb':'40px'
      },
      fontFamily:{
        "np":["Neue Plak Regular", "sans-serif"],
        "np-bold":["Neue Plak Bold",  "sans-serif"],
        "np-bold-cond":["Neue Plak Cond Black",  "sans-serif"],
        "np-semibold":["Neue Plak Cond Black",  "sans-serif"]
      },
      fontSize:{
        "feature-1":["105px","95px"],
        "feature-1-mobile":["48px","43px"],
        "feature-2":["64px","58px"],
        "feature-2-mobile":["48px","43px"],
        "feature-3":["54px","43px"],
        "feature-4":["45px","36px"],
        "feature-5":["24px","1"],
        "feature-5-mobile":["22px","1"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
  ],
}

/*

CONTAINER SIZES

@xs	@container (min-width: 20rem 320px )
@sm	@container (min-width: 24rem 384px )
@md	@container (min-width: 28rem 448px )
@lg	@container (min-width: 32rem 512px )
@xl	@container (min-width: 36rem 576px )
@2xl	@container (min-width: 42rem 672px )
@3xl	@container (min-width: 48rem 768px )
@4xl	@container (min-width: 56rem 896px )
@5xl	@container (min-width: 64rem 1024px )
@6xl	@container (min-width: 72rem 1152px )
@7xl	@container (min-width: 80rem 1280px )
 
SCREEN SIZES

'sm': '640px',
'md': '768px',
'lg': '1024px',
'xl': '1280px',
'2xl': '1536px',

*/