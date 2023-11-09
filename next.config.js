/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    output: 'standalone', // Move the output option here
  },
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
