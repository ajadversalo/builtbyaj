// tailwind.config.js
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      textShadow: {
        sm: '0 1px 2px rgba(0,0,0,0.25)',
        DEFAULT: '0 4px 6px rgba(0,0,0,0.3)',
        lg: '0 6px 12px rgba(0,0,0,0.35)',
        glow: '0 0 20px rgba(255,255,255,0.7)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const shadows = theme('textShadow');
      const utilities = Object.entries(shadows).map(([key, value]) => {
        return [`.text-shadow-${key}`, { textShadow: value }];
      });
      addUtilities(Object.fromEntries(utilities));
    },
  ],
}