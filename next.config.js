/** @type {import('next').NextConfig} */
const nextConfig = {
  
  postcss: (webpack) => {
    return [
      require('tailwindcss'),
      require('postcss-preset-env')({
        autoprefixer: { grid: true },
        stage: 1,
        features: {
          'focus-within-pseudo-class': false,
        },
      }),
    ];
  },
}

module.exports = nextConfig;
