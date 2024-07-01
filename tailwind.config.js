/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			fontFamily: {
				'sans': ['"PF"', 'ui-sans-serif', 'system-ui'],
				'intro': ['"Intro"', 'ui-sans-serif', 'system-ui']
			}
		},
  },
  plugins: [],
}

