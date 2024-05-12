/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        noto:" 'Noto Sans', sans-serif"
      },
      backgroundImage: {
        'log-in': "url('https://i.ibb.co/FgrBM02/360-F-460710131-Yk-D6-Nsivdy-Ys-Hup-Nv-O3-Y8-MPEwx-TAh-ORh.jpg')",
        'registration': "url('https://i.ibb.co/WWhy00R/geometric-gradient-futuristic-background-23-2149116406.jpg')",
        
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
