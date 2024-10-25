/** @type {import('next').NextConfig} */

const nextConfig = {
    eslint: {
      ignoreDuringBuilds: true, // Ignora los errores y advertencias de ESLint en Vercel
    },
  }
  
  module.exports = nextConfig
